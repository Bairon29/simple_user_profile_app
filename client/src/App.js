import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <Router>
        <div className="App">
          <h1>HAAAAAAA</h1>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
          </div>
        </div>
      // </Router>
    );
  }
}

export default App;
