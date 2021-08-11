import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';

import Cart from './components/Cart';

function App() {
  return (
    <div className="main_content">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route className="cart" exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
