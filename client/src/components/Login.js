import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions'
import { connect } from 'react-redux'

import  loginIcon from './images/login-icon.png'
import userIcon from './images/username.png'
import passIcon from './images/password.png'

import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "./LoaderButton";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginMessage = this.loginMessage.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  async onSubmit(e){
    e.preventDefault();
    console.log('loginnnnn')
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({
      email: '',
      password: '',
      isLoading: true
    })
    try {
      console.log('loginnnnn')
      await this.props.SignInUser(user);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
    // this.props.SignInUser(user);
  }
  componentWillReceiveProps(nextProps){
    console.log('next props', nextProps)
    this.setState({
      message: nextProps.message,
      isLoading: false
    })
  }
  loginMessage(){
    var message = "", classValue = "hide";
    if(this.state.message !== "SUCCESS" && this.state.message !== ''){
     console.log('wrong condiiton')
      message = this.state.message
      classValue = "danger";
    } else {
      classValue = "hide";
    }
    return (
      <div className={classValue}>
        <p>{message}</p>
      </div>
    )
  }
  render() {
    return (
        <div className="auth-session">
          {this.loginMessage()}
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
                          placeholder="Password"
                          onChange={this.onChange} 
                          required />
                    </div>
                </div>
                <div className="auth-submit">
                <LoaderButton
                    className="button"
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Login"
                    loadingText="Logging in…"
                  />
                </div>
              </form> 
            </div>
          </div>
        </div>
    );
  }
}
//do proptypes

const mapStateToProps = state => {
  return {
      message: state.user.message,
      user: state.user.user
  }
}
export default connect(mapStateToProps, {SignInUser})(Login);
