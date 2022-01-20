import * as Actions from "../actions/ActionsTypes"




const HistoryMessageReducer = (state = {HistoryMessages:[]}, action) => {

    switch (action.type) {
        case Actions.HISTORYMESSAGES:
            return {
                ...state,
                HistoryMessages: action.HistoryMessages
            };
            
        default:
            return state;
    }

}
export default HistoryMessageReducer;
