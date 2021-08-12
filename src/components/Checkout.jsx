import React, { Component } from 'react';
import Clienteinfo from './ClientInfo';
import PaymentMethods from './PaymentMethods';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Clienteinfo />
        <PaymentMethods />
      </div>
    );
  }
}

export default Checkout;
