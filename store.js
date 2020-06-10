import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function reducerPrueba(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
const reducer = combineReducers({
  reducerPrueba
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
