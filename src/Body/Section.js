import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./section.css";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./sideBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">  
              <div className="container-fluid">
                <Dashboard />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );  
  }
}

function mapStateToProps(state) {
  return { user: state.reducer };
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
