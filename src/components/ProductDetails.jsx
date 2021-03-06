import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';
import Forms from './Forms';
import CartButton from './CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: JSON.parse(localStorage.getItem('counter')),
    };
  }

  updateCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    const { location: { state: { product, product: {
      title, thumbnail, tags, price, shipping,
    } } } } = this.props;
    const { counter } = this.state;
    const freeShippingTag = <span data-testid="free-shipping">Frete grátis!</span>;
    return (
      <div>
        <CartButton counter={ counter } />
        <h1 data-testid="product-detail-name">{title}</h1>
        { shipping.free_shipping && freeShippingTag }
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
          <AddToCart
            updateCounter={ this.updateCounter }
            dataId="product-detail-add-to-cart"
            product={ product }
          />
          <Link to="/">Voltar</Link>
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
