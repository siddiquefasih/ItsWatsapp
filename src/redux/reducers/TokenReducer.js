import * as Actions from "../actions/ActionsTypes"

const TokenReducer = (state = {}, action) => {
    // console.log(action, 'reducerrrrrrrrrrrrrr')

    switch (action.type) {
        case Actions.CLIENT_TOKEN:
            return {
                ...state,
                client_token: action.client_token
            };

        default:
            return state;
    }
}

export default TokenReducer;