import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.user.idToken !== "") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return { user: state.reducer };
};

export default connect(mapStateToProps, null)(PrivateRoute);
