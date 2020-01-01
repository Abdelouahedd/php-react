//import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../provider/AuthContext";

// const Section = () => {
//   const context = useContext(AuthContext)
//   useEffect(() => {
//     console.log(context);
//   }, [context])
//   return (
//     <div>
//       <h1>{JSON.stringify(context.state)}</h1>
//       {/* <button onClick={()=>context.dispatcher({type:"LOGIN"})}>l</button> */}
//     </div>
//   );
// }

// export default Section;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from "../history";

class Section extends Component {

  render() {
    return (
      <div>
        <h1>Hello {this.props.user.token}</h1>
        <button onClick={() => this.props.setUser()}>login</button>
        <button onClick={() => { this.props.logout(); history.push('/login') }}>lgout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: () => {
      dispatch({ type: "LOGIN" })
    },
    logout: () => {
      dispatch({ type: "LOGOUT" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section)


