import React, { Component } from "react";
import logo from "../images/ensa-khouribga-1.png";
import { AuthContext } from "../provider/AuthContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import history from "../history";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref : false
    }
    this.onhandlerSubmit = this.onhandlerSubmit.bind(this);
  }
  static contextType = AuthContext;

  onhandlerSubmit = e => {
    e.preventDefault();
    this.context.login();
    this.setState({ref:true});
    // history.push("/");
     //return <Redirect to="/" />;
  };

  render() {
    console.log(this.context);
    return (
      this.state.ref===true ?<Redirect to="/" />:
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth"></div>
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <img alt="" src={logo} className="logo" />{" "}
                </div>
                <h5>Département Math Informatique </h5>
                <h6 className="font-weight-light">ENSAK</h6>
                <form className="pt-3" onSubmit={e => this.onhandlerSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg 
                         font-weight-medium auth-form-btn"
                      // onClick={e => {
                      //   e.preventDefault();
                      //   login();
                      //   this.props.history.push("/");
                      // }}
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
}

export default Login;
