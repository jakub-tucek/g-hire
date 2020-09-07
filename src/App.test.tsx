import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('that that some currency is loaded', () => {
  const { getByText } = render(<App />);
  const currencyElem = getByText(/Fiji Dollar/i);
  expect(currencyElem).toBeInTheDocument();
});

test('that that currency is loaded based on query parameter', () => {
  const newRelativePathQuery = window.location.pathname + '?currencySearch=Fiji Dollar';
  window.history.pushState(null, '', newRelativePathQuery);

  const { getByText, queryByText } = render(<App />);
  const currencyElem = getByText(/Fiji Dollar/i);
  expect(currencyElem).toBeInTheDocument();

  const nonExistingCurrencyElem = queryByText(/CZK/i);
  expect(nonExistingCurrencyElem).toBe(null);
});

test('test that currency can be search using input', () => {
  const { getByText } = render(<App />);
  const currencyElem = getBy(/Fiji Dollar/i);

});
