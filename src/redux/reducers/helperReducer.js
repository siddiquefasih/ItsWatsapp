import * as Actions from "../actions/ActionsTypes"

const HelperReducer = (state = {isOnline:false}, action) => {
    switch (action.type) {
        case Actions.ONLINESTATUS:
            return {
                ...state,
                isOnline:true
            }
        case Actions.OFFLINESTATUS:
            return {
                ...state,
                isOnline:false
            }
    
        default:
            return state;
    }

}
export default HelperReducer;
