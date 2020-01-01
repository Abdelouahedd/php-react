import * as actionTypes from './actions';
import axios from 'axios';
import history from "../../history";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, message) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        message: message
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const logOut = (state,action)=>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: "",
        message: "log out",
        error:false
    };
  }
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            passwrd: password
        };
        let url = 'http://127.0.0.1/php-react/back-end/api/loginProf.php';
         axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.jwt, response.data.message));
                history.push("/");
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};