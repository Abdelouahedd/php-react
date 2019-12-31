import React, { Component } from "react";
import NavBar from "../navBar/NavBar";
import AuthProvider from "../provider/AuthContext";
import Section from "../Body/Section";

class Contenut extends Component {
  render() {
    return (
      <AuthProvider>
        <NavBar />
        <Section />
      </AuthProvider>
    );
  }
}

export default Contenut;
