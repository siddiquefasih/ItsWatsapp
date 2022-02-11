import * as Actions from "../actions/ActionsTypes"

const initialState = {
    client_token:'',
}

const TokenReducer = (state =initialState, action) => {
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