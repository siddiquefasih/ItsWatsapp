import * as Actions from "../actions/ActionsTypes"

const initialState = {
    conversationMessages:[],
    isLoading:false
}

const ConversationMessageReducer = (state=initialState,action) => {
    switch (action.type){
        case Actions.LOADING:
            return{
                ...state,
                isLoading:true
            };
        case Actions.CONVERSATIONMESSAGES:
            return{
                ...state,
                conversationMessages:action.conversationMessages,
                isLoading:false
            };
            default:
              return state;
            
    }
}

export default ConversationMessageReducer;


