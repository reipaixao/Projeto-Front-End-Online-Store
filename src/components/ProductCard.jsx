import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { product, product: {
      title, thumbnail, price,
    } } = this.props;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span>{`R$ ${price}`}</span>
        <AddToCart product={ product } />
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
