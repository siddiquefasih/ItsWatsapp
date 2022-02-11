import * as Actions from './ActionsTypes';
import axios from 'axios';
import { baseUrl } from "../../components/AppUrl"
import NavService from "../../components/NavigationService"


export const Login = (data, client_token,loader) => {
    // console.log(props, "prrrrrrrrrrrrrrrrrrrropppppppppppppppps")
    return async (dispatch) => {

        axios
            .post(`${baseUrl}auth/user`, data, { headers: { "xt-client-token": client_token } })
            .then(response => {
                const {user,token} = response.data.data
                dispatch({ type: Actions.LOGIN, userData: user, userToken: token})
                loader()
                NavService.reset(0,[{name:"Intelligence"}])
            })
            .catch(error => {
                alert(error)    
                loader()
            });
    }
}