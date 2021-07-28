import React, { Component } from 'react';
import './ItemCard.css';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAdd(evt) {
    evt.stopPropagation();
    this.props.add(this.props.id);
  }

  handleClick() {
    this.props.history.push(`/shops/${this.props.name}`);
  }

  render() {
    // console.log(this.props);
    return (
      <div className='ItemCard' onClick={this.handleClick}>
        <img
          src={this.props.image}
          alt={this.props.name}
          className='ItemCard-image'
        />
        <p className='ItemCard-info'>{this.props.name}</p>
        <p className='ItemCard-info'>R{this.props.price}</p>
        <div className='ItemCard-buttons'>
          <button onClick={this.handleAdd}>Add to cart</button>
        </div>
      </div>
    );
  }
}
