import React, { Component } from 'react';

import { getProductsFromCategoryAndQuery } from '../services/api';

import Search from './Search';
import ProductCard from './ProductCard';
import CartButton from './CartButton';
import Category from './Category';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allProducts: [],
      search: '',
      counter: JSON.parse(localStorage.getItem('counter')),
    };
  }

  updateCounter = () => {
    this.setState(() => ({ counter: JSON.parse(localStorage.getItem('counter')) }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  }

  handleClick = (event) => {
    event.preventDefault();
    this.reqProducts();
  }

  filterHandleClick = async ({ target: { name: id } }) => {
    const { search } = this.state;
    const request = await getProductsFromCategoryAndQuery(search, id);
    this.setState(() => ({ allProducts: request.results }), () => {
      this.setState(() => ({ loading: false }));
    });
  }

  reqProducts = async () => {
    const { search } = this.state;
    const request = await getProductsFromCategoryAndQuery(search);
    this.setState(() => ({
      allProducts: request.results,
      loading: true,
    }), () => {
      this.setState(() => ({ loading: false }));
    });
  }

  render() {
    const { allProducts, loading, counter } = this.state;
    return (
      <div className="main-content">
        <section className="aside-category">
          <Category filterOnClick={ this.filterHandleClick } />
        </section>
        <div>
          <section className="search_container">
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
            <CartButton counter={ counter } data-testid="shopping-cart-button" />
          </section>
          <section>
            { (loading) ? <Search /> : allProducts
              .map((product) => (
                <ProductCard
                  updateCounter={ this.updateCounter }
                  key={ product.id }
                  product={ product }
                />
              )) }
          </section>
        </div>
      </div>
    );
  }
}

export default ProductList;
