import React, { Component } from 'react';
import { SignInUser } from '../actions/userActions'
import { connect } from 'react-redux';

class Register extends Component {
  render() {
    return (
        <div>
          <h1>Register Component</h1>
          {/* <form onSubmit={this.onSubmit}>
            <div>
                <label>Title:</label><br />
                <input type="text" name="title" 
                    value={this.state.title} 
                    onChange={this.onChange} />
            </div>
            <br />
            <div>
                <label>Body:</label><br />
                <textarea name="body" 
                value={this.state.body} 
                onChange={this.onChange} ></textarea>
            </div>
            <br />
            <button type="submit">Submit</button>
        </form> */}
        </div>
    );
  }
}

export default Register;
