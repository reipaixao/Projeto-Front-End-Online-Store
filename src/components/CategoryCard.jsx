import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2 data-testid="category">{name}</h2>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
