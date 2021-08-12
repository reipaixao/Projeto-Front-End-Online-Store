import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { product, product: {
      title, thumbnail, price, shipping,
    } } = this.props;
    const freeShippingTag = <span data-testid="free-shipping">Frete grátis!</span>;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        { shipping.free_shipping && freeShippingTag }
        <img src={ thumbnail } alt={ title } />
        <span>{`R$ ${price}`}</span>
        <AddToCart dataId="product-add-to-cart" product={ product } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
