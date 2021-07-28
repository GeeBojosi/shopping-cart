import React, { Component } from 'react';
import CartSummary from './CartSummary';
import CartItem from './CartItem';
import './Cart.css';

function empty() {
  return <h1>Cart is empty</h1>;
}

export default class Cart extends Component {
  render() {
    const items = this.props.items.map(item => (
      <CartItem
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        quantity={item.qty}
        key={item.id}
        updateQuantity={this.props.updateQuantity}
        deleteItem={this.props.deleteItem}
      />
    ));
    return (
      <div className='Cart'>
        {this.props.items.length === 0 ? (
          <div className='Cart-empty'>{empty()}</div>
        ) : (
          <div className='Cart-items'>
            <div className='Cart-items-1'>{items}</div>
            <CartSummary itemInfo={this.props} />
          </div>
        )}
      </div>
    );
  }
}
