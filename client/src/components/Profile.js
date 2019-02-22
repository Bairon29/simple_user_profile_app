import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MeBox from './MeBox';

import './css/Profile.css';

class Profile extends Component {
  constructor(){
    super();

    this.styles = this.styles.bind(this);
  }

  styles(){
    console.log('right move',this.refs["profile-information"].style)
    return this.refs["profile-information"].style;
  }
  render() {
    return (
        <div  className="profile-container">
          <SideMenu style={this.styles} />
          <div ref="profile-information" className="profile-information">
            <MeBox />
          </div>
        </div>
    );
  }
}

export default Profile;
