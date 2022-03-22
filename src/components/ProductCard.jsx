import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { updateCounter, product, product: {
      title, thumbnail, price, shipping,
    } } = this.props;
    const freeShippingTag = <span data-testid="free-shipping">Frete grátis!</span>;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${product.id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
        >
          <h1>{ title }</h1>
          { shipping.free_shipping && freeShippingTag }
          <img src={ thumbnail } alt={ title } />
          <span>{`R$ ${price}`}</span>
        </Link>
        <AddToCart
          updateCounter={ updateCounter }
          dataId="product-add-to-cart"
          product={ product }
        />
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
