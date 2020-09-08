export interface CurrencyList {
  insitute: number;
  lastUpdated: string;
  comparisonDate: string;
  baseCurreny: string;
  fx: CurrencyModel[];
}

export interface CurrencyModel {
  currency: string;
  precision: number;
  nameI18N?: string;
  exchangeRate?: ExchangeRate;
  banknoteRate?: ExchangeRate;
  flags?: string[]
}

export interface ExchangeRate {
  buy: number;
  middle: number;
  sell?: number;
  indicator: number;
  lastModified: string;
}
