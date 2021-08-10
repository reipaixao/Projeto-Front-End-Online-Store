import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ image } alt={ title } />
        <span>{`R$ ${price}`}</span>
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
