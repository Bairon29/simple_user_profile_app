import { LOGIN_USER, UPDATE_USER, REGISTERED, UPDATE_IMAGE } from './types';
import { checkStatus } from '../utils/AuthenticationHelpers';
import { url } from '../utils/AuthTypes'
import axios from 'axios';

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

// export const SignInUser = (user_data) => {
//     console.log('action called')
//     return fetch(`${url}login`,{
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user_data)
//         })
//         .then(res => res.json())
//         .then(user => {
//             // localStorage.setItem('Auth', JSON.stringify(user))
//             // console.log('user',user);
//             // dispatch({
//             //     type: LOGIN_USER,
//             //     payload: user
//             // })
//             return checkStatus(user);
//         }).catch((err)=>console.log(err))
// }
// headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'JWT fefege...'
// },
export const profileInfo = () => (dispatch) => {
    // console.log('profile called')
    var AUTH = sessionStorage.getItem('Auth');
    let user = JSON.parse(AUTH);
    fetch(`${url}profile`,{
            method: "POST",
            // credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'authorization': user.token,
            }
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.setItem('Auth', JSON.stringify(user))
            // console.log('user',user);
            
            var statusMessage = checkStatus(user);
            dispatch({
                type: statusMessage.type,
                user: user.user,
                message: statusMessage.message
            })
            // if(statusMessage.type == )
        }).catch((err)=>console.log(err))
}
export const uploadPhoto = (file) => (dispatch) => {

    // const formData = new FormData();
    // formData.append('image',file);
    // const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // };
    // axios.post(`${url}uploadPhoto`,formData)
    //     .then((response) => {
    //         // alert("The file is successfully uploaded");
    //     }).catch((error) => {
    // });
    // console.log('about to fetch upload', file)
    var formData = new FormData();
    // formData.append('photo', {
    //     uri : file.uri,
    //     type: file.type,
    //     name: file.fileName
    //    });
    var AUTH = sessionStorage.getItem('Auth');
    let user = JSON.parse(AUTH);
    formData.append('image', file, "myimg.png");
    formData.append('name', "bairon");
    // let req = new Request(`${url}uploadPhoto`, {
    //     method: 'POST',
    //     headers: {'Accept': 'application/json', 'authorization': user.token},
    //     mode: 'no-cors',
    //     body: formData
    // });
    fetch(`${url}uploadPhoto`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            // 'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW', 
            // "Cache-Control": "no-cache"
            'authorization': user.token,
            // 'Content-Type':'multipart/form-data', 
        },
        // mode: 'no-cors',
        // "processData": false,
        // "contentType": false,
        // "mimeType": "multipart/form-data",
        body: formData
    }).then((response) => response.json())
    .then((data)=>{
        console.log(data);
        dispatch({
            type: UPDATE_IMAGE,
            image: data.image,
            message: data.message
        })
        // this.setState({images: data.images, isLoading: false});
        // this.props.updateImages(data.images);
    })
    // fetch(req)
    // .then((response) => response.json())
    // .then((data)=>{
    //     console.log(data);
    //     // this.setState({images: data.images, isLoading: false});
    //     // this.props.updateImages(data.images);
    // })
    .catch(error => console.log(error));

    // fetch(`${url}profile`,{
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': user.token
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //         // localStorage.setItem('Auth', JSON.stringify(user))
    //         // console.log('user',user);
            
    //         var statusMessage = checkStatus(user);
    //         dispatch({
    //             type: statusMessage.type,
    //             user: user.user,
    //             message: statusMessage.message
    //         })
    //         // if(statusMessage.type == )
    //     }).catch((err)=>console.log(err))
}


export const updateUserInfo = (user_data) => (dispatch) => {
    console.log('update called')
    var AUTH = sessionStorage.getItem('Auth');
    let user = JSON.parse(AUTH);
    fetch(`${url}update`,{
            method: "POST",
            // credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'authorization': user.token
            },
            body: JSON.stringify(user_data)
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.setItem('Auth', JSON.stringify(user))
            // console.log('user',user);
            
            var statusMessage = checkStatus(user);
            dispatch({
                type: statusMessage.type,
                user: user.user,
                message: statusMessage.message
            })
            // if(statusMessage.type == )
        }).catch((err)=>console.log(err))
}

export const SignInUser = (user_data) => (dispatch) => {
    console.log('action called')
    fetch(`${url}login`,{
            method: "POST",
            // credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.setItem('Auth', JSON.stringify(user))
            // console.log('user',user);
            
            var statusMessage = checkStatus(user);
            dispatch({
                type: statusMessage.type,
                payload: user,
                message: statusMessage.message
            })
            // if(statusMessage.type == )
        }).catch((err)=>console.log(err))
}

export const RegisterUser = (user_data) => (dispatch) => {
    console.log('register action called')
    fetch(`${url}register`,{
            method: "POST",
            // credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.setItem('Auth', JSON.stringify(user))
            // console.log('user',user);
            
            var statusMessage = checkStatus(user);
            if(statusMessage.status){
                dispatch({
                    type: REGISTERED,
                    message: statusMessage.message
                })
            } else{
                dispatch({
                    type: statusMessage.type,
                    message: statusMessage.message
                })
            }
            // if(statusMessage.type == )
        }).catch((err)=>console.log(err))
}