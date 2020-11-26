import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.components';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.components';
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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignInAndSignUp} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
