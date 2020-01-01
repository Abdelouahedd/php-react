import React from 'react';
import { connect } from "react-redux";
const isAuthentifated = (props) => {
    console.log("State from pro", props.isLogin());
    if (props.isLogin()) {
        return true;
    } else {
        return false;
    }
}
// const mapStateToProps = (state) => {
//     console.log("State from Store", state.user);
//     return { user: state.user };
// }
const mapDispatchToProps = (dispatch) => {
    return {
      isLogin: () => {
        dispatch({ type: "ISLOGIN" })
      }
    }
  }

export default connect(null, mapDispatchToProps)(isAuthentifated);
