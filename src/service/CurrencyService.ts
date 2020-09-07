import { CurrencyModel } from '../domain/CurrencyModel';
import fx from './../data/fx.json';

export class CurrencyService {

  static filterCurrencyList(searchValue: string | undefined): CurrencyModel[] {
    if (!searchValue) {
      return CurrencyService.retrieveCurrencyList();
    }
    const searchValueLowerCase = searchValue.toLocaleLowerCase();

    return CurrencyService.retrieveCurrencyList()
      .filter(currencyItem => {
        if (!currencyItem.currency) return false;
        if (currencyItem.currency.toLocaleLowerCase().includes(searchValueLowerCase)) return true;
        if (!currencyItem.nameI18N) return false;
        if (currencyItem.nameI18N.toLocaleLowerCase().includes(searchValueLowerCase)) return true;
      })
  }


  private static retrieveCurrencyList(): CurrencyModel[] {
    return fx.fx;
  }
}
