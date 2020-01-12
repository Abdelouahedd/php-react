import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./section.css";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./sideBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import  ListeProfs from "./Ensiegnant/ListeProfs";
import { Route, Switch } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import AjouterProf from "./Ensiegnant/AjouterProf";
import ajouterFormation from "./formation/ajouterFormation";
import { listFormation } from "./formation/listFormation";
import { ajouterModule } from "./module/ajouterModule";
import { listModules } from "./module/listModules";
import { validerChoix } from "./Ensiegnant/validerChoix";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/listProf" component={ListeProfs} />
                  <Route path="/ajouterProf" component={AjouterProf} />
                  <Route path="/ajouterFormation" component={ajouterFormation} />
                  <Route path="/listFormation" component={listFormation} />
                  <Route path="/AjouterModule" component={ajouterModule} />
                  <Route path="/listModule" component={listModules} />
                  <Route path="/validChoix" component={validerChoix} />
                </Switch>
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

export default (connect(mapStateToProps, mapDispatchToProps)(Section));
