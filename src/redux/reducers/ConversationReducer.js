import * as Actions from "../actions/ActionsTypes"

const initialState = {
    conversationData:[],
    isLoading:false,
    selectedNumber:"asd"
}
const ConversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING:
            return{
                ...state,
                isLoading:true
            };
            
        case Actions.SELECTEDNUMBER:
            return{
                ...state,
                selectedNumber:action.payload
            };


        case Actions.CONVERSATION:
            return {
                ...state,
                conversationData: action.conversationData,
                isLoading:false
            };

        default:
            return state;

    }

}
export default ConversationReducer;