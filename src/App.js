import React, { Component } from 'react';
import Home from './Home';
import Shop from './Shop';
import Navbar from './Navbar';
import Cart from './Cart';
import { Route, Switch } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/shops' render={() => <Shop />} />
          <Route exact path='/cart' render={() => <Cart />} />
        </Switch>
      </div>
    );
  }
}

export default App;
