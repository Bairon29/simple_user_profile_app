import React, { Component } from 'react';
import './App.css';

import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import UserAuth from './utils/UserAuth'
import isLoggedInAuth from './utils/isLoggedInAuth'
class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={isLoggedInAuth(Login)} />
          {/* <div className="container"> */}
            <Route exact path="/register" component={isLoggedInAuth(Register)} />
            <Route exact path="/profile" component={UserAuth(Profile)} />
            {/* <Route exact path="**" component={Login} /> */}
          {/* </div> */}
        </div>
    );
  }
}

export default connect()(App);
