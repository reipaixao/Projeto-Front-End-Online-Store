import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartArray: JSON.parse(localStorage.getItem('cartArray')),
      cartCounter: JSON.parse(localStorage.getItem('arrayCounter')),
    };
  }

  addOrSubProduct = (event) => {
    const { target, target: { name } } = event;
    const id = target.getAttribute('data-id');
    const arrayCounter = JSON.parse(localStorage.getItem('arrayCounter'));
    const arrayFound = arrayCounter.find((idAndCounter) => idAndCounter[0] === id);
    if (name === 'add') {
      arrayFound[1] += 1;
    } else {
      arrayFound[1] -= 1;
    }
    if (arrayFound[1] === 0) {
      this.removeProduct(event);
    } else {
      const findIndex = arrayCounter
        .map((a, i) => [a, i])
        .find((element) => element[0][0] === id)[1];
      arrayCounter[findIndex] = arrayFound;
      localStorage.setItem('arrayCounter', JSON.stringify(arrayCounter));
      this.setState(() => ({
        cartCounter: JSON.parse(localStorage.getItem('arrayCounter')),
      }));
    }
  }

  removeProduct = ({ target }) => {
    const id = target.getAttribute('data-id');
    const arrayCounter = JSON.parse(localStorage.getItem('arrayCounter'));
    const cartArray = JSON.parse(localStorage.getItem('cartArray'));
    const findIndex = arrayCounter
      .map((a, i) => [a, i])
      .find((element) => element[0][0] === id)[1];
    arrayCounter.splice(findIndex, 1);
    cartArray.splice(findIndex, 1);
    localStorage.setItem('arrayCounter', JSON.stringify(arrayCounter));
    localStorage.setItem('cartArray', JSON.stringify(cartArray));
    this.setState(() => ({
      cartArray: JSON.parse(localStorage.getItem('cartArray')),
      cartCounter: JSON.parse(localStorage.getItem('arrayCounter')),
    }));
  }

  mapStorage = (cartArray) => {
    const { cartCounter } = this.state;
    return (cartArray.map(({ title, id, thumbnail }, index) => (
      <div key={ id }>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <button data-id={ id } onClick={ this.removeProduct } type="submit">X</button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${cartCounter[index][1]}`}
        </span>
        <button
          data-testid="product-decrease-quantity"
          name="subtract"
          data-id={ id }
          onClick={ this.addOrSubProduct }
          type="submit"
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          name="add"
          data-id={ id }
          onClick={ this.addOrSubProduct }
          type="submit"
        >
          +
        </button>
      </div>
    )));
  }

  render() {
    const { cartArray } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return (
      <div>
        {(!cartArray || cartArray.length === 0) ? empty : this.mapStorage(cartArray)}
        <Link to="/">Voltar.</Link>
      </div>
    );
  }
}
export default Cart;
