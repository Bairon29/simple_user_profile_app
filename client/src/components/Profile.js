import React, { Component } from 'react';
import SideMenu from './SideMenu';

import './css/Profile.css';

class Profile extends Component {
  render() {
    return (
        <div className="profile-container">
          <SideMenu />
        </div>
    );
  }
}

export default Profile;
