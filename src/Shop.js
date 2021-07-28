import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './Shop.css';

export default class Shop extends Component {
  render() {
    console.log(this.props);

    const shopItems = this.props.products.map(item => (
      <ItemCard
        id={item.id}
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.qty}
        image={item.image}
        history={this.props.history}
        add={this.props.addToCart}
      />
    ));
    return <div className='Shop'>{shopItems}</div>;
  }
}
