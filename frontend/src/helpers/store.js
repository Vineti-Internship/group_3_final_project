import {combineReducers, createStore, applyMiddleware} from "redux";
import authentication from "../reducers/authenticationReducer";
import popup from "../reducers/popupReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  authentication: authentication,
  popup:popup
  //There should be other reducers..............
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);