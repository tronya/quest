import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";


import quests from './reducers/quests';
import questsDetail from './reducers/detailQuest';
import routeInfo from "./reducers/routeInfo";
import sockets from "./reducers/sockets";

const reducer = combineReducers({
  quests,
  questsDetail,
  routeInfo,
  sockets
});

export default function configureStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
  return store
}