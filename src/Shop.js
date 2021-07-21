import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './Shop.css';

export default class Shop extends Component {
  render() {
    console.log(this.props);
    const shopItems = this.props.products.map(item => (
      <ItemCard
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        history={this.props.history}
        add={this.props.addToCart}
      />
    ));
    return <div className='Shop'>{shopItems}</div>;
  }
}

// {
//   /* <div className='Shop-item'>
//         <img src={item.image} alt={item.name} className='Shop-image' />
//         <div className='Shop-item-info'>
//           <h3>{item.name}</h3>
//           <h5>{item.price}</h5>
//         </div>
//         <button>Add to cart</button>
//       </div> */
// }
