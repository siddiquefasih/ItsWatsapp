import * as Actions from "../actions/ActionsTypes"

const ConversationReducer = (state = {}, action) => {

    switch (action.type) {
        case Actions.CONVERSATION:
            return {
                ...state,
                conversationData: action.conversationData
            };

        default:
            return state;

    }

}
export default ConversationReducer;