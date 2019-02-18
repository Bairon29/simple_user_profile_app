import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class SideMenu extends Component {
    constructor(){
        super();
        
        this.logOut = this.logOut.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    logOut(){
        console.log('logging out')
    }
    openNav(){
        console.log('Opening out', this.refs);
        this.refs["side-menu"].style.width = "100%";
        this.refs["menu-option"].classList.remove("menu-option");
        this.refs["menu-option1"].classList.remove("menu-option");
    }
    closeNav(){
        console.log('Closing out');
        this.refs["side-menu"].style.width = "0";
        this.refs["menu-option"].classList.add("menu-option");
        this.refs["menu-option1"].classList.add("menu-option");
    }
    render() {
        return (
            <div className="main-side-menu">
                <header className="horizon-menu">
                    <div className="icon-logo">
                        <span onClick={this.openNav} className="menu-icon">&#9776;</span>
                        <h1 className="logo">B.J.V</h1>
                    </div>
                    <div className="log-out">
                        <a href="#" onClick={this.logOut} className="nav-link">
                            Logout
                        </a>
                    </div>
                </header>
                <div className="side-menu" ref="side-menu" id="side-menu">
                    <a href="javascript:void(0)" className="close-btn" 
                       onClick={this.closeNav} >&times;</a>
                    <a href="" className="menu-option option" ref="menu-option">User Profile</a>
                    <a href="" className="menu-option option" ref="menu-option1">Change Password</a>
                </div>
            </div>
        );
    }
}

export default SideMenu;