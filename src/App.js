import Login from "./Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Service/PrivateRoute";
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import Section from './Body/Section';
import { Route, Router } from "react-router-dom";
import history from "./history";

const initialeState = {
  islogin: false,
  token: ""
}

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        islogin: true,
        token: "abdelouahed"
      };

    //break;
    case "LOGOUT":
      return {
        ...state,
        islogin: false,
        token: ""
      }
    case "ISLOGIN":
      return state.islogin;
    //break;
    default: return state;
  }
};
const myLogger = (store) => (next) => (actions) => {
  console.log("Logger action", actions);
  next(actions);
}
const store = createStore(combineReducers({ user: reducer }), {}, applyMiddleware(myLogger));




export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Section} />
        </Router>
      </Provider>
    );
  }
}

export default App;
