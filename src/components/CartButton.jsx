import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button"><span role="img" aria-label="emoji-cart">🛒</span></button>
        </Link>
      </div>
    );
  }
}

export default CartButton;
