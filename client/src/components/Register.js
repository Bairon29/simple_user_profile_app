import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions'
import { connect } from 'react-redux';
import  loginIcon from './images/login-icon.png'
import userIcon from './images/username.png'
import passIcon from './images/password.png'
class Register extends Component {
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
                      <div className="auth-field">
                          <div className="auth-field-icon">
                            <img src={passIcon} />
                          </div>
                          <div className="auth-field-input">
                            <input type="password" name="conform_password" 
                                value={this.state.body} 
                                placeholder="Conform Password"
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
                                value={this.state.body} 
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
                      <div className="auth-field">
                          <div className="auth-field-icon">
                            <img src={passIcon} />
                          </div>
                          <div className="auth-field-input">
                            <input type="password" name="conform_password" 
                                value={this.state.body} 
                                placeholder="Conform Password"
                                onChange={this.onChange} 
                                required />
                          </div>
                      </div>
                      <div className="auth-submit">
                        <button type="submit">Login</button>
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
