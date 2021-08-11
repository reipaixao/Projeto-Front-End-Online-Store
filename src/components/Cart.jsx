import React from 'react';

import { Link } from 'react-router-dom';

class Cart extends React.Component {
  mapStorage = (cartArray) => {
    const counterStorage = JSON.parse(localStorage.getItem('arrayCounter'));
    return (cartArray.map(({ title, id }, index) => (
      <div key={ id }>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <span data-testid="shopping-cart-product-quantity">
          { counterStorage[index][1] }
        </span>
      </div>
    )));
  }

  render() {
    const cartArray = JSON.parse(localStorage.getItem('cartArray'));
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return (
      <div>
        {(!cartArray) ? empty : this.mapStorage(cartArray)}
        <Link to="/">Voltar.</Link>
      </div>
    );
  }
}
export default Cart;
