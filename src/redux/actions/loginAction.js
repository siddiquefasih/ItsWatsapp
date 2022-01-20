import * as Actions from './ActionsTypes';
import axios from 'axios';
export const Login = (data) => {
    // console.log(data, "prrrrrrrrrrrrrrrrrrrropppppppppppppppps")
    return async (dispatch) => {

        axios
            .post(`https://wentterminus.its.com.pk/v1/auth/user`, data.data, { headers: { "xt-client-token": data.client_token } })
            .then(response => {
                dispatch({ type: Actions.LOGIN, userData: response.data.data.user, userToken: response.data.data.token })
                data.props.navigate('Intelligence')
            })
            .catch(error => {
                alert("Login Failed")
            });
    }
}