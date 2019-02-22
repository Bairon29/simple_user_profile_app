import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
export default function (Conmponent) {
    class UnAuthenticate extends Component {

        render () {
            var action = null;
            // if(localStorage.getItem('Auth')){
            if(sessionStorage.getItem('Auth')){
                // var AUTH = localStorage.getItem('Auth');
                var AUTH = sessionStorage.getItem('Auth');
                let user = JSON.parse(AUTH);
                action = user.token ? true : false;
            } else{
                action = false
            }
            if(action){
                return <Redirect to='/profile' />  
            }
            return(
                <Conmponent {...this.props} />
            )
        }   
    }
    UnAuthenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.user.isAuth
        }
    }
    return connect(mapStateToProps)(UnAuthenticate)
}