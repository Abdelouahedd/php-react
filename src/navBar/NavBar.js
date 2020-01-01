import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import logo from "../images/logoEnsa.png";
import * as actions from '../redux/actions/auth';
import history from '../history';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";
class NavBar extends Component {

  logOut = (e) => {
    e.preventDefault();
    this.props.onLogout();
    history.push("/login");
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            className="img-logo d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Memebre du département</Nav.Link>
            <Nav.Link href="#pricing"> Formation</Nav.Link>
            <Nav.Link href="#link">Liste des modules</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Abdelouahed ennouri" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">
                <FaUserAlt />
                &nbsp; Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="dropdown-item"
                onClick={(e)=>this.logOut(e)}
              >
                <IoMdLogOut />
                &nbsp; Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logOut())
  };
};
export default connect(null, mapDispatchToProps)(NavBar);
