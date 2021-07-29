import React, { Component } from 'react';
import './CartItem.css';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.quantity,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  increment() {
    this.props.updateQuantity(this.props.id, 1);
  }

  decrement() {
    this.props.updateQuantity(this.props.id, -1);
  }

  handleRemove() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    console.log(this.props);
    return (
      <div className='CartItem'>
        <p className='CartItem-name'>{this.props.name}</p>
        <p className='CartItem-price'>R{this.props.price}</p>
        <button
          className='CartItem-buttons'
          onClick={this.decrement}
          disabled={this.props.quantity < 2}>
          -
        </button>
        <input
          className='CartItem-input'
          type='text'
          value={this.props.quantity}
          name={this.props.name}
          readOnly
        />
        <button className='CartItem-buttons' onClick={this.increment}>
          +
        </button>
        <br />
        <button className='CartItem-remove' onClick={this.handleRemove}>
          Remove
        </button>
      </div>
    );
  }
}
