import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Falta importar as imagenspara o codigo de barras
// o elo, mastercard e visa { visa, mastercard, creditcard}

export default class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { onChange } = this.props;
    onChange(name, value);
  }

  PayMethodCreate(title, htmlForId, src, alt) {
    return (
      <div>
        <label htmlFor={ htmlForId }>
          <input
            type="radio"
            onChange={ this.handleChange }
            name="payMethod"
            id={ htmlForId }
            value={ title }
          />
          { title }
          <img src={ src } alt={ alt } />
        </label>
      </div>
    );
  }

  render() {
    const visa = 'https://kontaazul.com.br/wp-content/uploads/2020/07/quais-sao-os-cartoes-visa.jpg';
    const mastercard = 'https://kontaazul.com.br/wp-content/uploads/2020/07/quais-sao-os-cartoes-mastercard.jpg';
    const elo = 'https://kontaazul.com.br/wp-content/uploads/2020/05/elo-cartoes.png';
    const bars = 'https://www.tag-id.com.br/wp-content/uploads/2019/06/barcode-306926_640-e1560291480556.png';
    return (
      <div>
        <h3>Método de Pagamento</h3>
        <div>
          <div>
            <h4>Cartão de Crédito</h4>
            <div>
              {this.PayMethodCreate('Visa', 'visa', visa, 'Cartão de Crédito Visa')}
              {this.PayMethodCreate('MasterCard',
                'mastercard', mastercard, 'Cartão de Crédito MasterCard')}
              {this.PayMethodCreate('Elo', 'elo', elo, 'Cartão de Crédito Elo')}
            </div>
          </div>
          <div>
            <h4>Boleto</h4>
            <div>
              <input
                type="radio"
                onChange={ this.handleChange }
                name="payMethod"
                id="billet"
                value="Boleto"
              />
              <img src={ bars } alt="Código de barra" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PaymentMethods.propTypes = {
  onChange: PropTypes.func,
}.isRequired;
