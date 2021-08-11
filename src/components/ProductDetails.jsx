import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Forms from './Forms';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product: {
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
        </section>
        <Forms />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
