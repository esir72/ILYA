import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

type OrderPayload = Record<string, unknown>;

function field(body: OrderPayload, name: string, maxLength: number): string {
  return typeof body[name] === 'string' ? body[name].trim().slice(0, maxLength) : '';
}

function respond(res: VercelResponse, status: number, body: { ok: boolean; error?: string }): void {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8').json(body);
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const allowedOrigin = (process.env.SITE_ORIGIN || 'https://ilya-wood.shop').replace(/\/$/, '');
  const requestOrigin = req.headers.origin;
  res.setHeader('Vary', 'Origin');

  if (requestOrigin && requestOrigin !== allowedOrigin) {
    respond(res, 403, { ok: false, error: 'origin_not_allowed' });
    return;
  }
  if (requestOrigin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    respond(res, 405, { ok: false, error: 'method_not_allowed' });
    return;
  }

  const body = req.body as OrderPayload | undefined;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    respond(res, 400, { ok: false, error: 'invalid_request' });
    return;
  }

  // Silently accept bot submissions that fill the hidden honeypot field.
  if (field(body, '_gotcha', 200)) {
    respond(res, 200, { ok: true });
    return;
  }

  const name = field(body, 'name', 120).replace(/[\r\n]+/g, ' ');
  const contactType = field(body, 'contact_type', 20);
  const contact = field(body, 'phone', 120).replace(/[\r\n]+/g, ' ');
  const country = field(body, 'phone_country', 30);
  const messenger = field(body, 'messenger', 30);
  const delivery = field(body, 'delivery', 100);
  const address = field(body, 'address', 500);
  const comment = field(body, 'comment', 2000);
  const cart = field(body, 'cart', 5000);

  if (!name || !contact || !['tg', 'phone'].includes(contactType) ||
      !['telegram', 'whatsapp', 'viber', 'max', 'sms'].includes(messenger) ||
      !['Почта России', 'СДЭК', 'Другое'].includes(delivery)) {
    respond(res, 400, { ok: false, error: 'invalid_order' });
    return;
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.ORDER_EMAIL_TO;
  const port = Number(process.env.SMTP_PORT || 465);
  if (!host || !user || !pass || !recipient || !Number.isInteger(port) || port <= 0) {
    respond(res, 503, { ok: false, error: 'email_not_configured' });
    return;
  }

  const contactLabel = contactType === 'tg' ? 'Ник в соцсетях' : 'Телефон';
  const countryLabel = country ? ` (${country})` : '';
  const message = [
    'Новый заказ с сайта ilya-wood.shop',
    '',
    `Имя: ${name}`,
    `${contactLabel}: ${contact}${countryLabel}`,
    `Мессенджер: ${messenger}`,
    `Доставка: ${delivery}`,
    `Адрес: ${address || 'не указан'}`,
    '',
    'Состав заказа:',
    cart || 'Корзина не указана',
    '',
    `Комментарий: ${comment || 'нет'}`
  ].join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
      auth: { user, pass }
    });
    await transporter.sendMail({
      from: user,
      to: recipient,
      subject: `Заказ с сайта — ${name}`,
      text: message
    });
    respond(res, 200, { ok: true });
  } catch (error) {
    console.error('SMTP order delivery failed:', error instanceof Error ? error.name : 'unknown error');
    respond(res, 502, { ok: false, error: 'email_delivery_failed' });
  }
}
