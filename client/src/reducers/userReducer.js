import {
    LOGIN_USER, 
    UPDATE_USER, 
    ERROR_MASSEGE, 
    REGISTERED 
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
            return {
                ...state,
                user: action.payload
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