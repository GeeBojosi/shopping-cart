import React, { Component } from 'react';
import ItemCard from './ItemCard';
import products from './data/products';
import './Shop.css';

export default class Shop extends Component {
  render() {
    const shopItems = products.map(item => (
      <ItemCard name={item.name} price={item.price} image={item.image} />
    ));
    return (
      <div className='Shop'>
        {/* <h1>Welcome To the shop</h1> */}
        {shopItems}
      </div>
    );
  }
}

{
  /* <div className='Shop-item'>
        <img src={item.image} alt={item.name} className='Shop-image' />
        <div className='Shop-item-info'>
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
        </div>
        <button>Add to cart</button>
      </div> */
}
