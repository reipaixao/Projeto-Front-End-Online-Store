import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product, product: {
      title, thumbnail, tags, price,
    } } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <h4>{`R$ ${price}`}</h4>
        <section>
          <h3>Detalhe do produto:</h3>
          <nav>
            <ul>
              <li>{tags[0]}</li>
              <li>{tags[1]}</li>
              <li>{tags[2]}</li>
            </ul>
          </nav>
          <AddToCart data-testid="shopping-cart-product-name" product={ product } />
          <Link to="/">Voltar</Link>
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
