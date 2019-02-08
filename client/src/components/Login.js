import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions'
import  {wasLoginSuccessful}  from '../utils/AuthenticationHelpers';

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
      // if(res){
      //   let Auth = localStorage.getItem('Auth');
      //   let JSON_AUTH = JSON.parse(Auth);
      //   // console.log(JSON_AUTH)
      //   // console.log('user: ',res)
      //   if(JSON_AUTH.token === res.token && JSON_AUTH.email === res.email){
      //     this.props.history.push('/register')
      //   }
      // }
      wasLoginSuccessful(res, this.props);
    })
  }
  render() {
    return (
        <div>
          <h1>Login Component</h1>
          <form onSubmit={this.onSubmit}>
            <div>
                <label>Title:</label><br />
                <input type="text" name="email" 
                    value={this.state.title} 
                    onChange={this.onChange} />
            </div>
            <br />
            <div>
                <label>Body:</label><br />
                <input type="password" name="password" 
                value={this.state.body} 
                onChange={this.onChange} />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form> 
        </div>
    );
  }
}

export default Login;
