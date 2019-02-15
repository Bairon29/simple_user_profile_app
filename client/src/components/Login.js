import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions'
import  {wasLoginSuccessful}  from '../utils/AuthenticationHelpers';
import { connect } from 'react-redux'

import  loginIcon from './images/login-icon.png'
import userIcon from './images/username.png'
import passIcon from './images/password.png'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({
      email: '',
      password: ''
    })
    SignInUser(user).then(res => {
      wasLoginSuccessful(res, this.props);
    })
  }
  render() {
    return (
        <div className="auth-session">
          <div className="auth-container">
            <div className="auth-title">
              <h1>SIGN IN</h1>
            </div>
            <div className="auth-icon">
              <img src={loginIcon} />
            </div>
            <div className="auth-form">
              <form onSubmit={this.onSubmit}>
                <div className="auth-field">
                    <div className="auth-field-icon">
                      <img src={userIcon} />
                    </div>
                    <div className="auth-field-input">
                      <input type="text" name="email" 
                          value={this.state.title} 
                          placeholder="Sample@sample.com"
                          onChange={this.onChange}
                          required />
                    </div>
                </div>
                <div className="auth-field">
                    <div className="auth-field-icon">
                      <img src={passIcon} />
                    </div>
                    <div className="auth-field-input">
                      <input type="password" name="password" 
                          value={this.state.body} 
                          placeholder="Password"
                          onChange={this.onChange} 
                          required />
                    </div>
                </div>
                <div className="auth-submit">
                  <button type="submit">Login</button>
                </div>
              </form> 
            </div>
          </div>
        </div>
    );
  }
}

export default connect(null, {wasLoginSuccessful})(Login);
