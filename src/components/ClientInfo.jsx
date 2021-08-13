import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  Cria array de estados
const arrayOfStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
  'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

export default class ClientInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  //  Função que cria um evento em cada input e armazena na prop o valor do target.
  handleChange(e) {
    const { name, value } = e.target;
    const { onChange } = this.props;
    onChange(name, value);
  }

  // função que cria inputs do form
  fieldForm(...parameters) {
    return (
      <div>
        <label htmlFor={ parameters[1] }>
          <input
            data-testid={ parameters[0] }
            type={ parameters[2] }
            id={ parameters[3] }
            name={ parameters[4] }
            placeholder={ parameters[5] }
            onChange={ this.handleChange }
            value={ parameters[6] }
          />
        </label>
      </div>
    );
  }

  // cria os estados
  createFieldState() {
    return (
      <select onChange={ this.handleChange } name="state">
        {arrayOfStates.map((eachState) => (
          <option key={ eachState }>{ eachState }</option>
        ))}
      </select>
    );
  }

  // criando o formulário para o cliente preencher com os dados do cliente
  render() {
    return (
      <div>
        <h3>Informações do Comprador</h3>
        <form>
          {this.fieldForm('checkout-fullname', 'name', 'Nome completo', 'text', 'name')}
          {this.fieldForm('checkout-email', 'email', 'E-mail', 'email', 'email')}
          {this.fieldForm('checkout-cpf', 'cpf', 'CPF', 'text', 'cpf')}
          {this.fieldForm('checkout-phone', 'phone', 'Telefone', 'text', 'phone')}
          {this.fieldForm('checkout-cep', 'cep', 'CEP', 'text', 'cep')}
          {this.fieldForm('checkout-address', 'address', 'Endereço', 'text', 'address')}
          {this.fieldForm('checkout-comp', 'compl', 'Complemento', 'text', 'compl')}
          {this.fieldForm('checkout-adNumb', 'adNumb', 'Número', 'text', 'addressNum')}
          {this.fieldForm('checkout-city', 'city', 'Cidade', 'text', 'city')}
          {this.createFieldState()}
        </form>
      </div>
    );
  }
}

ClientInfo.propTypes = {
  onChange: PropTypes.func.isRequired,
};
