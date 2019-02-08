import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
export default function (Conmponent) {
    class Authenticate extends Component {
        
        componentWillMount() {
            // console.log('register',this.props)
            // if (!this.props.isAuth) {
            //     console.log(this.props.isAuth)
            //     this.context.router.history.push('/')                        
            // }
            // if(localStorage.getItem('Auth')){
            //     var AUTH = localStorage.getItem('Auth');
            //     let user = JSON.parse(AUTH);
            //     fetch(`${url}hasAccess`,{
            //      method: "POST",
            //      headers: {
            //          'content-type': 'application/json'
            //      },
            //      body: JSON.stringify(user.token)
            //  })
            //  .then(res => res.json())
            //  .then(res => {
            //      if(res.status){
            //          return Conmponent;
            //      } else {
            //         this.context.router.history.push('/') 
            //      }
            //  }).catch((err)=>console.log(err))
            //  }
        }

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