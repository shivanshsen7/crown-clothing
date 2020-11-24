import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.components';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
