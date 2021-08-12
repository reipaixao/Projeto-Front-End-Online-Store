import React from 'react';
import './Forms.css';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = () => {
    console.log('Você clicou em enviar.');
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form className="forms">
          Email:
          <input type="text" />
          Avalie o Produto:
          <textarea
            data-testid="product-detail-evaluation"
            value={ value }
            onChange={ this.handleChange }
            name="value"
            cols="30"
            rows="10"
          />
        </form>
        <input onClick={ this.handleSubmit } type="submit" value="Enviar" />
      </div>
    );
  }
}

export default Forms;
