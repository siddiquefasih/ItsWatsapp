import * as Actions from '../actions/ActionsTypes'

const AuthReducer = (state = {}, action) => {

    // console.log(action,"Helllo this is LoginReducer")
    switch (action.type) {
        case Actions.LOGIN:
            return {
                ...state,
                userToken: action.userToken,
                userData:action.userData
            };
        // case Actions.LOGINCLIENT:
        //     return{

        //     };
        case Actions.LOGOUT:
            return {

            };
        default:
            return state;
    }

}
export default AuthReducer;
