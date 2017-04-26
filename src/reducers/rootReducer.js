import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import getVisibleTodos from "./login.js";

const rootReducer = combineReducers({
  // getVisibleTodos,
  routing: routerReducer
});

export default rootReducer;
