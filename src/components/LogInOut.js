import React from "react";

/**
  This exercise will Log-In and Log-out the user.
  @version 2019-08-12
 */

const LogInOut = (props) => {
  return (
    <div>
      <h4>You are logged {props.validateLogin ? <strong>in</strong> : <strong>out</strong>}.
        <button onclick={props.handleSecurity}>{props.validateLogin ? <span>Log out</span> : <span>Log in</span>}</button>
      </h4>
    </div>
  );
};

export default LogInOut;

