import React, { Component } from 'react';
import './ItemCard.css';

export default class ItemCard extends Component {
  render() {
    return (
      <div className='ItemCard'>
        <img
          src={this.props.image}
          alt={this.props.name}
          className='ItemCard-image'
        />
        <p className='ItemCard-info'>{this.props.name}</p>
        <p className='ItemCard-info'>{this.props.price}</p>
        <button>Add to cart</button>
        <button>Favorite</button>
      </div>
    );
  }
}
