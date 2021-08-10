import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

import Search from './Search';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allProducts: undefined,
      search: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  }

  handleClick = (event) => {
    event.preventDefault();
    this.reqProducts();
  }

  reqProducts = async () => {
    const { search } = this.state;
    const request = await getProductsFromCategoryAndQuery(search);
    this.setState(() => ({ allProducts: request.results }), () => {
      this.setState(() => ({ loading: false }));
    });
  }

  render() {
    const { allProducts, loading } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          name="search"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <span role="img" aria-label="emoji-cart">🛒</span>
        </Link>
        <section>
          { (loading) ? <Search /> : allProducts
            .map(({ id, title, price, thumbnail }) => (<ProductCard
              key={ id }
              title={ title }
              price={ price }
              image={ thumbnail }
            />)) }
        </section>
      </div>
    );
  }
}

export default ProductList;
