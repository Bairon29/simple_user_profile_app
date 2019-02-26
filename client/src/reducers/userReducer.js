import {
    LOGIN_USER, 
    UPDATE_USER, 
    ERROR_MASSEGE, 
    REGISTERED,
    USER_INFO
} from '../actions/types';

const initialState = {
    user: {},
    isAuth: false,
    message: '',
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            console.log('reducing', action.payload, Object.keys(action.payload).length > 0  ? true : false)
            return {
                user: action.payload,
                message: action.message,
                isAuth: Object.keys(action.payload).length > 0  ? true : false,
                isLoading: false
            }
        case UPDATE_USER:
        case USER_INFO:
            console.log('reducer profile info');
            return {
                ...state,
                user: action.user,
                message: action.message
            }
        case REGISTERED:
        case ERROR_MASSEGE:
            console.log('conveing message')
            return {
                ...state,
                message: action.message,
                isLoading: false
            }
        default:
            return state;
    }
}