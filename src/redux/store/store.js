import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from '../reducers/counterReducer'
import thunk from 'redux-thunk'
import AuthReducer from '../reducers/AuthReducer'
import TokenReducer from '../reducers/TokenReducer';
import HelperReducer from '../reducers/helperReducer';
import ChatHistoryReducer from '../reducers/ChatReducer';
import HistoryMessageReducer from '../reducers/HistoryMessagesReducer';
import ConversationReducer from '../reducers/ConversationReducer';

const AppReducers = combineReducers({
    counterReducer,AuthReducer,TokenReducer,HelperReducer,ChatHistoryReducer,HistoryMessageReducer,ConversationReducer
});


const rootReducer = (state, action) => {
	return AppReducers(state,action);           
}

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;