import { LOGIN_USER, UPDATE_USER } from './types';
import { checkStatus } from '../utils/AuthenticationHelpers';
import { url } from '../utils/AuthTypes'

// export function SignInUser (user_data) {
//     return (dispatch) => {
//         console.log('adding us..')
//         axios.post(`${url}user`,user_data).then((res)=>{
//             let user = res.data
//             console.log('==================signin=======')
//             console.log(user)
//             console.log('==================signin=======')
//             localStorage.setItem('Auth', JSON.stringify(user))
//             dispatch({type: 'SET_USER', user})
//         }).catch((err)=>console.log(err))
//     }
// }
// export const createPost = (postData) => dispatch => {
//     console.log('action called')
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         })
//         .then(res => res.json())
//         .then(post => dispatch({
//             type: NEW_POST,
//             payload: post
//         })
//         )
// }

export const SignInUser = (user_data) => {
    console.log('action called')
    return fetch(`${url}login`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.setItem('Auth', JSON.stringify(user))
            // console.log('user',user);
            // dispatch({
            //     type: LOGIN_USER,
            //     payload: user
            // })
            return checkStatus(user);
        }).catch((err)=>console.log(err))
}