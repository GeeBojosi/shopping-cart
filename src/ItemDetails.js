import React, { Component } from 'react';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  handleClick = () => {
    this.props.addToCart(this.props.item.id);
  };
  render() {
    console.log(this.props);
    return (
      <div className='ItemDetails'>
        <img
          src={this.props.item.image}
          alt={this.props.item.name}
          className='ItemDetails-image'
        />
        <h1 className='ItemDetails-title'>{this.props.item.name}</h1>
        <p className='ItemDetails-price'>R{this.props.item.price}</p>
        <button onClick={this.handleClick} className='ItemDetails-btn'>
          Add to Cart
        </button>
      </div>
    );
  }
}
