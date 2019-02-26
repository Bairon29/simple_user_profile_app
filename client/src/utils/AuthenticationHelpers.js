import React from 'react';
import {ERROR_MASSEGE, LOGIN_USER, REGISTERED, USER_INFO, UPDATE_USER } from '../actions/types';
import { url } from './AuthTypes'
import { Redirect } from 'react-router-dom';

export const checkStatus = (user) => {
    var statusMessage = {
        type: '',
        message: ''
    }
    if(user.error && user.error === 'User does not exists'){
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "Your credential are incorrect"
        }
    } else if(user.error && user.error === 'User already exists'){
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "User already exists",
            registered: false
        }
    } else if(user.error && user.error === 'User already exists'){
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "User already exists",
            registered: false
        }
    } else if(user.status && user.status.split(' ')[0] === 'registered'){
        statusMessage = {
            type:  REGISTERED,
            message: user.status
        }
    } else if(user.status && user.status === "Retrieving User Info"){
        console.log('user Info');
        statusMessage = {
            type:   USER_INFO,
            message: "SUCCESS"
        }
    } else if(user.status && user.status === "Updated User Info"){
        console.log('user Updaate');
        
        statusMessage = {
            type:   UPDATE_USER,
            message: "SUCCESS"
        }
    } else if(user.token && user.email){
        console.log('user logged')
        sessionStorage.setItem('Auth', JSON.stringify(user));
        // localStorage.setItem('Auth', JSON.stringify(user))
        statusMessage = {
            type:   LOGIN_USER,
            message: "SUCCESS"
        }
    } else {
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "Redirecting..."
        }
    }
    return statusMessage;
}

export const wasLoginSuccessful = (user, props) =>{
    if(user && user.type === LOGIN_USER){
        //dispatch to message
        console.log('right place')
        props.history.push('/profile')
    } else {
        if(localStorage.getItem('Auth')){
            // localStorage.removeItem('Auth');
            sessionStorage.removeItem('Auth');
        }
        ////dispatch to message
        props.history.push('/')
    }
}

export const grandPassage = (component) =>{
    if(localStorage.getItem('Auth')){
    //    var AUTH = localStorage.getItem('Auth');
       var AUTH = sessionStorage.getItem('Auth');
       let user = JSON.parse(AUTH);
       fetch(`${url}hasAccess`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user.token)
    })
    .then(res => res.json())
    .then(res => {
        if(res.status){
            return component;
        } 
    }).catch((err)=>console.log(err))
    }
    return <Redirect to='/' />
}
