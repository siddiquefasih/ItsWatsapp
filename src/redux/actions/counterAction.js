import { connect } from 'react-redux';

import * as Actions from './ActionsTypes';
import CounterComponent from '../../../src/containers/auth/CounterComponent'
import axios from 'axios';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiIxIiwiY2xpZW50VG9rZW5JZCI6IjI2NTg5MjA2LTZmYzUtNGFiYy1hNDZhLTJmZDIzY2QwYTY2NiIsInV1aWQiOiI5MTYyZDYyMC00NTVlLTQwMDYtOGUzOS1jYTZmYWUxMmMwNDAiLCJ0aW1lIjoxNjQxNTM5MTk3OTA2LCJpYXQiOjE2NDE1MzkxOTd9.WzQzM6pqThaSlgQQdYxkZ-mi91gDJgu4iyiTZIsTpNI'

// export const Login = (data) => {
//     axios
//         .post(`https://wentterminus.its.com.pk/v1/auth/user`, data, { headers: { "token": token } })
//         .then(response => {
//             console.log(response,'resssssss')
//             dispatch({ type: Actions.LOGIN, userData: response })
//         })
//         .catch(error => {
//             console.log(error)
//         });
// }