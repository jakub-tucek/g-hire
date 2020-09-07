import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyListComponent from './component/CurrencyList/CurrencyListComponent';
import HeaderComponent from './component/Header/HeaderComponent';
import SearchBarComponent from './component/SearchBar/SearchBarComponent';
import { CurrencyModel } from './domain/CurrencyModel';
import { CurrencyService } from './service/CurrencyService';

const currencySearchQueryParam = 'currencySearch'

function setParameterToUrl(searchString: string | undefined) {
  const searchParams = new URLSearchParams(window.location.search)
  if (searchString) {
    searchParams.set(currencySearchQueryParam, searchString);
  } else {
    searchParams.delete(currencySearchQueryParam)
  }
  const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(null, '', newRelativePathQuery);
}

function App() {
  const [currencyList, currencyListChange] = useState<CurrencyModel[]>();
  const [defaultSearchString, defaultSearchStringChange] = useState<string>();

  function processSearchValueChange(searchString: string | undefined) {
    const currencyListFiltered = CurrencyService.filterCurrencyList(searchString)
    currencyListChange(currencyListFiltered)

    setParameterToUrl(searchString);
  }

  /**
   * When list is not initialized - null/undefined, check query parameter first
   */
  if (!currencyList) {
    const params = new URLSearchParams(window.location.search)
    const defaultSearchString = params.get(currencySearchQueryParam) || undefined;
    processSearchValueChange(defaultSearchString)
    defaultSearchStringChange(defaultSearchString)
  }

  return (
    <div className="App">
      <HeaderComponent/>
      <SearchBarComponent initialValue={defaultSearchString} onSearchValueChange={processSearchValueChange}/>
      <main>
        {currencyList && <CurrencyListComponent currencies={currencyList}/>}
      </main>
    </div>
  );
}

export default App;
