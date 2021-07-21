import React, { Component } from 'react';

export default class ItemDetails extends Component {
  handleClick = () => {
    this.props.addToCart(this.props.item.id);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.item.image} alt={this.props.item.name} />
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.price}</p>
        <button onClick={this.handleClick}>Add to Cart</button>
      </div>
    );
  }
}
