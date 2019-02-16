import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions';
import { connect } from 'react-redux';
import  loginIcon from './images/login-icon.png';
import userIcon from './images/username.png';
import passIcon from './images/password.png';
import LoaderButton from "./LoaderButton";
import LocationSelection from './LocationSelection';

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
      message: '',
      isLoading: false
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
    // SignInUser(user).then(res => {
    //   // wasLoginSuccessful(res, this.props);
    // })
  }
  render() {
    return (
        <div className="auth-session">
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
                              <select name="gender" value={this.state.gender} onChange={this.onChange}>
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
                              <input type="text" name="zipcode" 
                                  value={this.state.body} 
                                  placeholder="Enter Zipcode"
                                  onChange={this.onChange} 
                                  required />
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

export default Register;
