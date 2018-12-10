import {combineReducers, createStore, applyMiddleware} from "redux";
import {authentication} from "../reducers/authenticationReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  authentication: authentication
  //There should be other reducers..............
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);