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
      qty: 0,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id) {
    const item = products.find(product => product.id === id);
    this.setState(st => ({
      cart: [...st.cart, item],
    }));
  }

  render() {
    console.log(products);
    const getCurrentItem = props => {
      let name = props.match.params.name;
      let currentItem = products.find(
        item => item.name.toLowerCase() === name.toLowerCase()
      );
      console.log(props);
      return (
        <ItemDetails {...props} item={currentItem} addToCart={this.addToCart} />
      );
    };

    return (
      <div className='App'>
        <Navbar itemsNumber={this.state.cart.length} />
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
              <Cart items={this.state.cart} quantity={this.state.qty} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
