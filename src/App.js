import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.components';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.components';
import { setCurrentUser } from './redux/user/user.actions'
import './App.css';
// import { render } from 'node-sass';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
