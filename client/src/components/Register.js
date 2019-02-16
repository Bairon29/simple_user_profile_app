import React, { Component } from 'react';
import { RegisterUser } from '../actions/userActions';
import { connect } from 'react-redux';
import  loginIcon from './images/login-icon.png';
import userIcon from './images/username.png';
import passIcon from './images/password.png';
import LoaderButton from "./LoaderButton";
import LocationSelection from './LocationSelection';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      conform_password: '',
      address: '',
      gender: '',
      state: '',
      city: '',
      zipcode: 0,
      message: '',
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  async onSubmit(e){
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      conform_password: this.state.conform_password,
      gender: this.state.gender,
      address: this.state.address,
      state: this.state.state,
      city: this.state.city,
      zipcode: this.state.zipcode
    }
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      conform_password: '',
      address: '',
      gender: '',
      state: '',
      city: '',
      zipcode: 0,
      isLoading: true
    })
    try {
      await this.props.RegisterUser(user);
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
  registerMessage(){
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
    if(this.state.message === "Redirecting..."){
      return <Redirect to='/' /> 
    }
    return (
        <div className="auth-session">
          {this.registerMessage()}
          <div className="auth-container auth-container-reg">
            <div className="auth-title">
              <h1>REGISTER</h1>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="flex-container">
                
                  <div className="item">
                    <div className="auth-icon">
                      <img src={loginIcon} />
                    </div>
                    <div className="auth-form">
                      {/* <form onSubmit={this.onSubmit}> */}
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={userIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input type="text" name="first_name"
                                  placeholder="Enter First Name"
                                  onChange={this.onChange}
                                  required />
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input type="text" name="last_name" 
                                  placeholder="Password"
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
                                  placeholder="Enter Password"
                                  onChange={this.onChange} 
                                  required />
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input type="password" name="conform_password"
                                  placeholder="Conform Password"
                                  onChange={this.onChange} 
                                  required />
                            </div>
                        </div>
                      {/* </form>  */}
                    </div>
                  </div>
                  {/* temp */}
                  <div className="item">
                    <div className="auth-form">
                      {/* <form onSubmit={this.onSubmit}> */}
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={userIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input type="email" name="email" 
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
                              <select name="gender" 
                                value={this.state.gender} 
                                onChange={this.onChange}>
                                <option value="" defaultValue disabled>Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Choose Not To Answer">
                                  Choose Not To Answer
                                </option>
                              </select>
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input type="text" name="address" 
                                  placeholder="Enter Address"
                                  onChange={this.onChange} 
                                  required />
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <LocationSelection 
                                val={this.state.state}
                                loc="state" 
                                state_for_city=""
                                onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <LocationSelection 
                                val={this.state.city}
                                loc="city" 
                                state_for_city={this.state.state}
                                onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="auth-field">
                            <div className="auth-field-icon">
                              <img src={passIcon} />
                            </div>
                            <div className="auth-field-input">
                              <input name="zipcode" type="text" 
                                     inputMode="numeric" 
                                     placeholder="Enter Zipcode"
                                     onChange={this.onChange} 
                                     required 
                                     />
                            </div>
                        </div>
                        <div className="auth-submit">
                        <LoaderButton
                          className="button"
                          type="submit"
                          isLoading={this.state.isLoading}
                          text="Register"
                          loadingText="Validating…"
                        />
                        </div>
                      {/* </form>  */}
                    </div>
                  </div>
                  {/* end temp */}
                
              </div>
            </form>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      message: state.user.message
  }
}

export default connect(mapStateToProps, {RegisterUser})(Register);
