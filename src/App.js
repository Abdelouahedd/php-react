import React from "react";
import Login from "./Login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Router, Route,  } from "react-router-dom";
import Contenut from "./Contenut/Contenut";
import { PrivateRoute } from "./Service/PrivateRoute";
import AuthProvider from "./provider/AuthContext";
import history from "./history";
function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Contenut} />
      </AuthProvider>
    </Router>
  );
}

export default App;
