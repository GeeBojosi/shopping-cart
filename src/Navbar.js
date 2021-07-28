import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <Link className='Navbar-title' to='/'>
          Clothes <span className='Navbar-color'>Store</span>
        </Link>
        <div className='Navbar-links'>
          <NavLink activeClassName='active-link' to='/'>
            Home
          </NavLink>
          <NavLink activeClassName='active-link' to='/shops'>
            Shop
          </NavLink>
          <NavLink activeClassName='active-link' to='/cart'>
            Cart - {this.props.itemsNumber}
          </NavLink>
        </div>
      </div>
    );
  }
}
