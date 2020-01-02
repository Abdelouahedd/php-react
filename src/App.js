import React from "react";
import Login from "./Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Service/PrivateRoute";
import history from "./history";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Section from "./Body/Section";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <PrivateRoute  path="/" component={Section}/> */}
          <Route path="/" component={Section} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default (App);
