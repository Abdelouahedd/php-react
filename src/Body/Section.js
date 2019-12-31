import React, { Component } from "react";
import { AuthContext } from "../provider/AuthContext";

class Section extends Component {
  static contextType = AuthContext;

  render() {
    console.log(this.context);

    return (
      <AuthContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Token = {context.token}</h1>
              {/* <button onClick={context.logout}>l</button> */}
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Section;
