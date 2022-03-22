import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  componentDidMount() {
    this.setCounterStorage();
  }

  setCounterStorage = () => {
    const counterStorage = JSON.parse(localStorage.getItem('counter'));
    if (!counterStorage) {
      localStorage.setItem('counter', '0');
    }
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="emoji-cart">🛒</span>
          <span data-testid="shopping-cart-size">{ counter }</span>
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  counter: PropTypes.number,
}.isRequired;

export default CartButton;
