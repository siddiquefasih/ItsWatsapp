import * as Actions from "../actions/ActionsTypes"

const ChatHistoryReducer = (state = {}, action) => {

    switch (action.type) {
        case Actions.CHATHISTORY:
            return {
                ...state,
                chatHistoryData: action.chatHistoryData
            };

        default:
            return state;

    }

}
export default ChatHistoryReducer;