import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('test currency list and search', () => {
  test('that that some currency is loaded', () => {
    const { getByText } = render(<App />);
    const currencyElem = getByText(/Fiji Dollar/i);
    expect(currencyElem).toBeInTheDocument();
  });

  test('that that currency is loaded based on query parameter', () => {
    const newRelativePathQuery = `${window.location.pathname}?currencySearch=Fiji Dollar`;
    window.history.pushState(null, '', newRelativePathQuery);

    const { getByText, queryByText } = render(<App />);
    const currencyElem = getByText(/Fiji Dollar/i);
    expect(currencyElem).toBeInTheDocument();

    const nonExistingCurrencyElem = queryByText(/CZK/i);
    expect(nonExistingCurrencyElem).toBe(null);
  });

  test('that currency can be search using input', () => {
    const { getByLabelText, getByText, queryByText } = render(<App />);
    const searchInput = getByLabelText('search-input');

    fireEvent.change(searchInput, { target: { value: 'USD' } });

    const dollarElem = getByText(/USD/i);
    expect(dollarElem).toBeInTheDocument();

    const someOtherCUrrency = queryByText(/CZK/i);
    expect(someOtherCUrrency).toBe(null);
  });
});
