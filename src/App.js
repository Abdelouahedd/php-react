import React from "react";
import Login from "./Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Router, Route } from "react-router-dom";
import Contenut from "./Contenut/Contenut";
import  PrivateRoute  from "./Service/PrivateRoute";
import history from "./history";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Contenut} />
        {/* <PrivateRoute exact path="/" component={Contenut} /> */}
      </Router>
    </Provider>
  );
}

export default App;
