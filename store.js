import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//reducers
import reducerAuth from './reducers/reducerAuth';

const reducer = combineReducers({
  auth: reducerAuth
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
