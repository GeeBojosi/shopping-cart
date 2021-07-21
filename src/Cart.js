import React, { Component } from 'react';
import CartSummary from './CartSummary';
import './Cart.css';

function empty() {
  return <h1>Cart is empty</h1>;
}

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.quantity,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }

  handleIncrement() {
    this.increment();
  }

  // decrement() {}

  render() {
    const items = this.props.items.map(item => (
      <div className='Cart-item'>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button>-</button>
        <input
          type='number'
          value={this.state.qty}
          onChange={this.handleIncrement}
        />
        <button onClick={this.increment}>+</button>
        <br />
        <button>Remove</button>
      </div>
    ));
    return (
      <div className='Cart'>
        {this.props.items.length === 0 ? (
          <div className='Cart-empty'>{empty()}</div>
        ) : (
          <div className='Cart-items'>
            <div className='Cart-items-1'>{items}</div>
            <CartSummary total={this.props.items.length} />
          </div>
        )}
      </div>
    );
  }
}
