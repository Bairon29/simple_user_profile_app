import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
export default function (Conmponent) {
    class Authenticate extends Component {

        render () {
            var action = null;
            if(localStorage.getItem('Auth')){
                var AUTH = localStorage.getItem('Auth');
                let user = JSON.parse(AUTH);
                action = user.token ? true : false;
            } else{
                action = false
            }
            if(!action){
                this.context.router.history.push('/')   
            }
            return(
                <Conmponent {...this.props} />
            )
        }   
    }
    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.user.isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate)
}