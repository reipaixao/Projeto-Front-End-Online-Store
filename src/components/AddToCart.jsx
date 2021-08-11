import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  addProduct = () => {
    const { product } = this.props;
    const cartStorage = localStorage.getItem('cartArray');
    console.log(cartStorage);
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
