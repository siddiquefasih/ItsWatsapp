import * as Actions from "../actions/ActionsTypes"

const initialState = {
    chatHistoryData:[],
    isLoading:false
}

const ChatHistoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.LOADING:
        return{
            ...state,
            isLoading:true
        };
        case Actions.CHATHISTORY:
            return {
                ...state,
                chatHistoryData: action.chatHistoryData,
                isLoading:false
            };

        default:
            return state;

    }

}
export default ChatHistoryReducer;