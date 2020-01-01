import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducers/UserReducer";
import thunk from 'redux-thunk';

export default createStore(combineReducers({reducer}),{},applyMiddleware(logger,thunk));


