import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="emoji-cart">🛒</span>
        </Link>
      </div>
    );
  }
}

export default CartButton;
