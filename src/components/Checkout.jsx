import React, { Component } from 'react';
import Clienteinfo from './ClientInfo';
import PaymentMethods from './PaymentMethods';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Clienteinfo />
        <PaymentMethods />
        <button type="submit">Finalizar Compra</button>
      </div>
    );
  }
}

export default Checkout;
