import * as Actions from "../actions/ActionsTypes"

const LoadingReducer = (state = {isLoading:false}, action) => {
    switch (action.type) {
        case Actions.SHOWLOADING:
            return {
                ...state,
                isLoading:true
            }
        case Actions.HIDELOADING:
            return {
                ...state,
                isLoading:false
            }
    
        default:
            return state;
    }

}
export default LoadingReducer;
