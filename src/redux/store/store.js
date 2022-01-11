import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from '../reducers/counterReducer'
import thunk from 'redux-thunk'
import AuthReducer from '../reducers/AuthReducer'
import TokenReducer from '../reducers/TokenReducer';

const AppReducers = combineReducers({
    counterReducer,AuthReducer,TokenReducer
});


const rootReducer = (state, action) => {
	return AppReducers(state,action);
            
}

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;