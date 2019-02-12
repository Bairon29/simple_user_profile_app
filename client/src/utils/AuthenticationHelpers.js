import React from 'react';
import {ERROR_MASSEGE, LOGGED_IN, url } from './AuthTypes';
import { Redirect } from 'react-router-dom';

export const checkStatus = (user) => {
    var statusMessage = {
        type: '',
        message: ''
    }
    if(user.error && user.status === 'User does not exists'){
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "Your credential are incorrect"
        }
    } else if(user.error){
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "Something went wrong, try again please"
        }
    } else if(user.token && user.email){
        localStorage.setItem('Auth', JSON.stringify(user))
        statusMessage = {
            type:  LOGGED_IN,
            message: "SUCCESS"
        }
    } else {
        statusMessage = {
            type:  ERROR_MASSEGE,
            message: "Your credential are incorrect"
        }
    }
    return statusMessage;
}

export const wasLoginSuccessful = (user, props) =>{
    if(user && user.type === LOGGED_IN){
        //dispatch to message
        console.log('right place')
        props.history.push('/profile')
    } else {
        if(localStorage.getItem('Auth')){
            localStorage.removeItem('Auth');
        }
        ////dispatch to message
        props.history.push('/')
    }
}

export const grandPassage = (component) =>{
    if(localStorage.getItem('Auth')){
       var AUTH = localStorage.getItem('Auth');
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
