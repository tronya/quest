import {combineReducers, createStore} from 'redux'
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store
}