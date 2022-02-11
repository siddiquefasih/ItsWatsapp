import * as Actions from "../actions/ActionsTypes"

const initialState = {
    HistoryMessages: [],
    isLoading: false
}

const HistoryMessageReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.LOADING:
            return {
                ...state,
                isLoading: true
            };
        case Actions.HISTORYMESSAGES:
            return {
                ...state,
                HistoryMessages: action.HistoryMessages, isLoading: false
            };

        default:
            return state;
    }

}
export default HistoryMessageReducer;
