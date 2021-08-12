import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyInventory: false,
    };
  }

  addCounterStorage = () => {
    const { product } = this.props;
    let counter = JSON.parse(localStorage.getItem('counter'));
    const verifyInventory = product.available_quantity - (counter + 1);
    if (verifyInventory >= 0) {
      counter += 1;
      localStorage.setItem('counter', counter);
    } else {
      this.setState(() => ({ emptyInventory: true }));
    }
  }

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
    const { emptyInventory } = this.state;
    const { updateCounter } = this.props;
    updateCounter();
    this.addCounterStorage();
    if (!emptyInventory) {
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
  }

  render() {
    const { dataId } = this.props;
    return (
      <div>
        <button
          data-testid={ dataId }
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
