import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CurrencyListComponent} from "./components/CurrencyList/CurrencyListComponent";
import fx from './data/fx.json'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <CurrencyListComponent currencies={fx.fx}/>
    </div>
  );
}

export default App;
