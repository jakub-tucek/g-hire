import React from 'react';
import { render } from '@testing-library/react';
import { CurrencyModel } from '../../domain/CurrencyModel';
import CurrencyListComponent from './CurrencyListComponent';

const currency = {
  currency: 'CZK',
  nameI18N: 'Ceska koruna',
  exchangeRate: {
    buy: 1.1,
    indicator: 1,
    middle: 1.5,
    sell: 1.1,
    lastModified: '',
  },
  banknoteRate: {
    buy: 1.1,
    indicator: 1,
    middle: 1.1,
    sell: 1.1,
    lastModified: '',
  },
  flags: [
    'provided',
  ],
  precision: 1,
} as CurrencyModel;

describe('test currency list', () => {
  test('that currency list is rendered', () => {
    const currencyList = [currency];
    const { getByText } = render(<CurrencyListComponent currencies={currencyList} />);

    const currencyText = getByText(/CZK/i);
    expect(currencyText).toBeInTheDocument();

    const exchangeRate = getByText(/1.5/i);
    expect(exchangeRate).toBeInTheDocument();
  });

  test('that currency without exchange rate wont be rendered', () => {
    const invalidCurrency = { ...currency };
    invalidCurrency.exchangeRate = undefined;

    const currencyList = [invalidCurrency];
    const { queryByText } = render(<CurrencyListComponent currencies={currencyList} />);

    const currencyText = queryByText(/CZK/i);
    expect(currencyText).toBe(null);
  });
});
