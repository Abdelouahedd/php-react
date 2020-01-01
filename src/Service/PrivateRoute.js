import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.user.islogin) {
          console.log("is Login from re", rest.user);
          return <Component {...props} />
        } else {
          return <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        }
      }
      }
    />
  );
}

const mapStateToProps = (state) => {
  console.log("State from Store", state.user);
  return { user: state.user };
}
const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => {
      dispatch({ type: "ISLOGIN" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

