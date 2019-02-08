import {LOGIN_USER, UPDATE_USER } from '../actions/types';

const initialState = {
    user: {},
    isAuth: false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            console.log('reducing', action.payload, Object.keys(action.payload).length > 0  ? true : false)
            return {
                user: action.payload,
                isAuth: Object.keys(action.payload).length > 0  ? true : false
            }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}