import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';

import Search from './components/Search';
import Category from './components/Category';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
      <Category />
      <Search />
    </div>
  );
}

export default App;
