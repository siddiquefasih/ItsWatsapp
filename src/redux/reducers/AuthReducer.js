import * as Actions from '../actions/ActionsTypes'

const AuthReducer = (state = {}, action) => {

    switch (action.type) {
        case Actions.LOGIN:
            return {
                
            };
        case Actions.LOGOUT:
            return {

            };
        default:
            return state;
    }

}
export default AuthReducer;
