import React from 'react';
import './Forms.css';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // this.setState({ value: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <form className="forms">
          Email:
          <input type="text" />
          Avalie o Produto:
          <textarea
            data-testid="product-detail-evaluation"
            // value={ this.state.value }
            onChange={ this.handleChange }
            name="avl"
            cols="30"
            rows="10"
          />
        </form>
        <input type="submit" value="Enviar" />
      </div>
    );
  }
}

export default Forms;
