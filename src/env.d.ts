type TranslationParams = Record<string, string | number>;
type TranslationData = Record<string, string>;

interface I18n {
  lang: string;
  data: TranslationData | null;
  loaded: boolean;
  _reqId: number;
  load(): Promise<void>;
  t(key: string, params?: TranslationParams): string;
  apply(): void;
  setLang(lang: string): Promise<void>;
  init(): Promise<void>;
}

interface CartItem {
  id: number;
  title: string;
  i18nKey: string;
  price: number;
  qty: number;
  img: string;
  color: string;
  colorKey: string;
}

interface ProductDataItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  price: number;
  priceFrom: boolean;
  gallery: string[];
  colorsJson: string;
  titleKey: string;
  descKey: string;
  priceKey: string;
  i18nKey: string;
}

declare var __pricing: {
  usd: Record<string, number>;
  from: number[];
};

interface Window {
  i18n: I18n;
  productData?: ProductDataItem[];
  initCart(): void;
  showToast(message: string): void;
  closeDetailModal?: () => void;
  ym?: (counterId: number, action: string, options?: Record<string, unknown>) => void;
  __base: string;
}
