import React from 'react';
import CartButton from './CartButton';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <CartButton />
      </div>
    );
  }
}
