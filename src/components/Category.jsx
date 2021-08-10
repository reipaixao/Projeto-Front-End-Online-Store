import React, { Component } from 'react';

import { getCategories } from '../services/api';
import CategoryCard from './CategoryCard';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: undefined,
    };
  }

  componentDidMount() {
    this.nome();
  }

  nome = async () => {
    const result = await getCategories();
    this.setState(() => ({ categories: result }));
  }

  render() {
    const { categories } = this.state;
    const loading = <h1>Carregando...</h1>;

    return (
      <div>
        <h2>Categorias Filtradas</h2>
        { (categories === undefined) ? loading : categories
          .map(({ id, name }) => <CategoryCard key={ id } name={ name } />) }
      </div>
    );
  }
}

export default Category;
