import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartArray: JSON.parse(localStorage.getItem('cartArray')),
      cartCounter: JSON.parse(localStorage.getItem('arrayCounter')),
      counter: JSON.parse(localStorage.getItem('counter')),
      inventory: [],
    };
  }

  componentDidMount() {
    this.settingInventory();
  }

  componentDidUpdate() {
    const { counter } = this.state;
    localStorage.setItem('counter', JSON.stringify(counter));
  }

  settingInventory = () => {
    const { cartArray, cartCounter } = this.state;
    if (cartArray) {
      const allinventory = cartArray
        .map((product, index) => (
          [product.id, (product.available_quantity - cartCounter[index][1]), false]
        ));
      this.setState(() => ({ inventory: allinventory }));
    }
  }

  addOrSubInventory = ({ target }) => {
    const { inventory } = this.state;
    const id = target.getAttribute('data-id');
    const findIndex = inventory
      .map((a, i) => [a, i])
      .find((element) => element[0][0] === id)[1];
    if (target.name === 'add') {
      inventory[findIndex][1] -= 1;
      if (inventory[findIndex][1] === 0) {
        inventory[findIndex][2] = true;
      }
    } else {
      inventory[findIndex][2] = false;
      inventory[findIndex][1] += 1;
    }
    return inventory[findIndex][2];
  }

  addOrSubProduct = (event) => {
    const { target, target: { name } } = event;
    const { cartCounter } = this.state;
    const id = target.getAttribute('data-id');
    const arrayCounter = cartCounter;
    const arrayFound = arrayCounter.find((idAndCounter) => idAndCounter[0] === id);
    const block = this.addOrSubInventory(event);
    if (name === 'add' && !block) {
      arrayFound[1] += 1;
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    } else {
      arrayFound[1] -= 1;
      if (arrayFound[1] !== 0) {
        this.setState(({ counter }) => ({ counter: counter - 1 }));
      }
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
        cartCounter: arrayCounter,
      }));
    }
  }

  removeProduct = ({ target }) => {
    const id = target.getAttribute('data-id');
    const { cartCounter, cartArray: arrayProduct } = this.state;
    const arrayCounter = cartCounter;
    const cartArray = arrayProduct;
    const findIndex = arrayCounter
      .map((a, i) => [a, i])
      .find((element) => element[0][0] === id)[1];
    const counterReduce = arrayCounter[findIndex][1];
    this.setState(({ counter }) => ({ counter: counter - counterReduce }));
    arrayCounter.splice(findIndex, 1);
    cartArray.splice(findIndex, 1);
    localStorage.setItem('arrayCounter', JSON.stringify(arrayCounter));
    localStorage.setItem('cartArray', JSON.stringify(cartArray));
    this.setState(() => ({
      cartArray,
      cartCounter: arrayCounter,
    }));
  }

  mapStorage = (cartArray) => {
    const { cartCounter } = this.state;
    return (cartArray.map((product, index) => {
      const { title, id, thumbnail } = product;
      return (
        <div key={ id }>
          <h2 data-testid="shopping-cart-product-name">{title}</h2>
          <button data-id={ id } onClick={ this.removeProduct } type="submit">X</button>
          <img src={ thumbnail } alt={ title } />
          <span data-testid="shopping-cart-product-quantity">
            {cartCounter[index][1]}
          </span>
          <Link
            to={ {
              pathname: `/details/${id}`,
              state: { product },
            } }
          >
            Detalhes
          </Link>
          <button
            data-testid="product-increase-quantity"
            name="add"
            data-id={ id }
            onClick={ this.addOrSubProduct }
            type="submit"
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            name="subtract"
            data-id={ id }
            onClick={ this.addOrSubProduct }
            type="submit"
          >
            -
          </button>
        </div>
      );
    }));
  }

  render() {
    const { cartArray } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return (
      <div>
        {(!cartArray || cartArray.length === 0) ? empty : this.mapStorage(cartArray)}
        <Link data-testid="checkout-products" to="/checkout">Comprar</Link>
        <Link to="/">Voltar.</Link>
      </div>
    );
  }
}
export default Cart;
