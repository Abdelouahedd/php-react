import React, { Component, createContext } from "react";

export const AuthContext = createContext();


class AuthProvider extends Component {
  state = {
    islogin: false,
    token: ""
  };
  login = () => {
    this.setState({
      islogin: true,
      token: "token"
    });
  };
  logout = () => {
    this.setState({
      islogin: false,
      token: ""
    });
  };
  render() {
    return (
      <AuthContext.Provider value={{...this.state,login:this.login,logout:this.logout}} >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
