import * as Actions from "../actions/ActionsTypes"
import axios from "axios"

export const Token = () => {
    return async (dispatch) => {
        
        let token = '704952ded8eba109c4f242c6796d1ba7d23f01eaa4ca9b6166c55506f497e828';

        axios.get('https://wentterminus.its.com.pk/v1/authenticate', { headers: { "xt-api-key": token } })
            .then(response => {
                console.log(response.data.data.token,'tokenrespinseeeeee')
                dispatch({ type: Actions.CLIENT_TOKEN, client_token: response.data.data.token })
            })
            .catch(error => {
                console.log(error,'tokenError');
            });
    }
}


