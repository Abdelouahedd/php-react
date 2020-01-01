import React, { useReducer, createContext } from "react";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        islogin: true,
        token: "Abdelouahed"
      };
    case 'LOGOUT':
      return {
        ...state,
        islogin: false,
        token: ""
      };
    default:
      return state;
  }
  return state;

}

const AuthProvider = (props) => {
  const [state, dispatcher] = useReducer(AuthReducer, { islogin: false, token: "" })
  return (
    <AuthContext.Provider value={{ state, dispatcher }} >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// class AuthProvider extends Component {
//   state = {
//     islogin: false,
//     token: ""
//   };
//   login = () => {
//     this.setState({
//       islogin: true,
//       token: "token"
//     });
//   };
//   logout = () => {
//     this.setState({
//       islogin: false,
//       token: ""
//     });
//   };
//   render() {
//     return (
//       <AuthContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }} >
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }

// export default AuthProvider;