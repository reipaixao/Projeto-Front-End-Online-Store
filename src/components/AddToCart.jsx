import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  createCounter = (id) => {
    let arrayCounter = localStorage.getItem('arrayCounter');
    if (!arrayCounter) {
      localStorage.setItem('arrayCounter', '[]');
      arrayCounter = localStorage.getItem('arrayCounter');
    }
    arrayCounter = JSON.parse(localStorage.getItem('arrayCounter'));
    const idAndCounter = [id, 1];
    arrayCounter = [...arrayCounter, idAndCounter];
    localStorage.setItem('arrayCounter', JSON.stringify(arrayCounter));
  }

  addCounter = (id) => {
    const arrayCounter = JSON.parse(localStorage.getItem('arrayCounter'));
    const arrayFound = arrayCounter.find((idAndCounter) => idAndCounter[0] === id);
    arrayFound[1] += 1;
    const findIndex = arrayCounter
      .map((a, i) => [a, i])
      .find((element) => element[0][0] === id)[1];
    arrayCounter[findIndex] = arrayFound;
    localStorage.setItem('arrayCounter', JSON.stringify(arrayCounter));
  }

  addProduct = () => {
    const { product } = this.props;
    let cartStorage = localStorage.getItem('cartArray');
    if (!cartStorage) {
      localStorage.setItem('cartArray', '[]');
      cartStorage = localStorage.getItem('cartArray');
    }
    cartStorage = JSON.parse(localStorage.getItem('cartArray'));
    const productFound = cartStorage.find(({ id }) => id === product.id);
    if (productFound) {
      this.addCounter(productFound.id);
    } else {
      const cartArray = [...cartStorage, product];
      localStorage.setItem('cartArray', JSON.stringify(cartArray));
      this.createCounter(product.id);
    }
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={ this.addProduct }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

AddToCart.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default AddToCart;
