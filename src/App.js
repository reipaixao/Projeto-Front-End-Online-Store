import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';

import Category from './components/Category';
import CartButton from './components/CartButton';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/cart" component={ CartButton } />
        </Switch>
        <Category />
      </BrowserRouter>
    </div>
  );
}

export default App;
