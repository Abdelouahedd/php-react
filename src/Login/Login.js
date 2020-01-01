import React, { useState } from "react";
import logo from "../images/ensa-khouribga-1.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { connect } from "react-redux";
import * as actions from '../redux/actions/auth';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  
  const handlerSubmit = e => {
        e.preventDefault();
        props.onAuth(email,pass);
     //   props.onAuth("a.metrane@usms.ma","azerty");
    };

  return (
    <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth"></div>
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="container">
                  <img alt="" src={logo} className="logo" />{" "}
                </div>
                <h5>Département Math && Info </h5>
                <h6 className="font-weight-light">ENSAK</h6>
                <form className="pt-3" onSubmit={(e)=>handlerSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Mot de passe"
                      required
                      onChange={(e)=>setpass(e.target.value)}
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg 
                         font-weight-medium auth-form-btn"
                    >
                      Connexion
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <a href="/" className="auth-link text-black">
                      Mot de passe oublié ?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
      onAuth: ( email, password ) => dispatch( actions.auth( email, password ) )
  };
};
export default connect(null,mapDispatchToProps)(Login)