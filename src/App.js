import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.components';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.components';

import './App.css';
// import { render } from 'node-sass';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user.photoURL)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInAndSignUp} />
          {/* <Route exact path='/hats' component={HatsPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
