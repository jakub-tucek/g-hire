import { CurrencyService } from './CurrencyService';


test('test that filtering by currency is OK', () => {
  const filtered = CurrencyService.filterCurrencyList('CzK');

  expect(filtered).toHaveLength(1);
  expect(filtered[0].currency).toBe('CZK')
});

test('test that filtering by invalid query does not work', () => {
  const filtered = CurrencyService.filterCurrencyList('KLKKKK');
  expect(filtered).toHaveLength(0);
});

test('test that filtering by i18n name works', () => {
    const filtered = CurrencyService.filterCurrencyList('Koruna');

    expect(filtered).toHaveLength(1);
    expect(filtered[0].currency).toBe('CZK')
  }
);
