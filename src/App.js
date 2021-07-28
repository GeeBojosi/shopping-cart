import React, { Component } from 'react';
import Home from './Home';
import Shop from './Shop';
import Navbar from './Navbar';
import products from './data/products';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import { Route, Switch } from 'react-router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.update = this.update.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addToCart(id) {
    const item = products.find(product => product.id === id);
    const itemExists = this.state.cart.map(cItem => cItem.id).includes(id);
    if (itemExists) {
      this.update(id, 1);
    } else {
      this.setState(st => ({
        cart: [...st.cart, item],
      }));
    }
  }

  update(id, newValue) {
    const updatedCart = this.state.cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + newValue } : item
    );

    this.setState({
      cart: updatedCart,
    });
  }

  deleteItem(id) {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== id),
    });
  }

  render() {
    const getCurrentItem = props => {
      let name = props.match.params.name;
      let currentItem = products.find(
        item => item.name.toLowerCase() === name.toLowerCase()
      );
      return (
        <ItemDetails {...props} item={currentItem} addToCart={this.addToCart} />
      );
    };

    const totalNoItem = this.state.cart.reduce((a, b) => a + b.qty, 0);
    return (
      <div className='App'>
        <Navbar itemsNumber={totalNoItem} />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route
            exact
            path='/shops'
            render={routeProps => (
              <Shop
                products={products}
                addToCart={this.addToCart}
                {...routeProps}
              />
            )}
          />
          <Route path='/shops/:name' render={getCurrentItem} />
          <Route
            exact
            path='/cart'
            render={() => (
              <Cart
                items={this.state.cart}
                updateQuantity={this.update}
                deleteItem={this.deleteItem}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
