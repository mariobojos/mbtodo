import React, {Component} from "react";

class LoginState extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    const loginStatus = (this.state.isLoggedIn) ? "in" : "out";
    return(
      <h5>You are currently logged {loginStatus}.</h5>
    );
  }
}

export default LoginState;