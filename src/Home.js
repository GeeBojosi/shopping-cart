import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1 className='Home-slogan'>
          Welcome
          {/* {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dicta
          mollitia laudantium illo, cupiditate minima libero est eum deserunt
          commodi perferendis itaque porro. Voluptatum, iusto. Voluptate
          blanditiis pariatur asperiores quidem. Natus eveniet quidem ducimus
          amet distinctio sunt ipsa quas iste, ex rerum eligendi maiores
          similique expedita architecto. Reiciendis consequuntur magni,
          praesentium, autem, aliquam suscipit accusantium cumque nam
          voluptatibus animi tempora! Dolorem, nam perferendis voluptatum ad
          quod inventore, reiciendis possimus animi vitae fugiat tenetur nostrum
          cupiditate doloremque similique. Quidem voluptas culpa maiores
          aspernatur corporis consequuntur voluptatum quis veniam possimus?
          Provident, quod. */}
        </h1>
        <Link to='/shops'>Shop</Link>
      </div>
    );
  }
}
