import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends Component {
  render() {
    const { name, id, filterOnClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ filterOnClick }
          name={ id }
          data-testid="category"
        >
          {name}
        </button>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  key: PropTypes.number,
}.isRequired;

export default CategoryCard;
