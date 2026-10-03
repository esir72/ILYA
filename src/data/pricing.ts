export const USD_PRICES: Record<number, number> = {
  1: 250,
  4: 220,
  5: 600,
  6: 600,
  7: 170,
  8: 600,
  9: 110,
  10: 170,
  11: 35,
  12: 150
};

export const PRICE_FROM_IDS: readonly number[] = [1, 4, 5, 6, 7, 8, 12];

export function isPriceFrom(id: number): boolean {
  return PRICE_FROM_IDS.indexOf(id) !== -1;
}

export function usdPrice(id: number, rub: number): number {
  const usd = USD_PRICES[id];
  return usd === undefined ? Math.ceil(rub / 100) : usd;
}

export function fromLabel(lang: string): string {
  return lang === 'en' ? 'from ' : 'от ';
}

export function formatRub(price: number, from?: boolean): string {
  if (price === 0) return 'Цена по запросу';
  return (from ? 'от ' : '') + price.toLocaleString('ru-RU') + ' ₽';
}

export function formatUsd(price: number, from?: boolean): string {
  if (price === 0) return 'Price on request';
  return (from ? 'from ' : '') + '$' + price.toLocaleString('en-US');
}
