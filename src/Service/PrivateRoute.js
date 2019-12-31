import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {context => {
      return (
        <Route
          {...rest}
          render={props =>
            context.islogin ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
          }
        />
      );
    }}
  </AuthContext.Consumer>
);
