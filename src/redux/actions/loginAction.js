import * as Actions from './ActionsTypes';
import axios from 'axios';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiIxIiwiY2xpZW50VG9rZW5JZCI6IjhiYThkOWFiLTE0ZDktNGM3Mi04MzFmLWEzYzljNjBmOGQ3MyIsInV1aWQiOiI5MTYyZDYyMC00NTVlLTQwMDYtOGUzOS1jYTZmYWUxMmMwNDAiLCJ0aW1lIjoxNjQxODgyMjcyMzAxLCJpYXQiOjE2NDE4ODIyNzJ9.d43jMMcY--Sg9jthie61kgekunc_iu_Eh7-nVVBn7Ew'

export const Login = (data) => {
    console.log(data, 'daa')
    console.log(data.client_token, 'daa')
    return async (dispatch) => {
        
        axios
            .post(`https://wentterminus.its.com.pk/v1/auth/user`, data.data, { headers: { "xt-client-token": data.client_token} })
            .then(response => {
                console.log(response, 'resssssss')
                dispatch({ type: Actions.LOGIN, userData: response })
                alert("Login Success")
            })
            .catch(error => {
                console.log(error)
                alert("Login Failed")
            });
    }
}