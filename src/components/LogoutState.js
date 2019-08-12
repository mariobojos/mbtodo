/*
This is a practice code written on Aug 08, 2019 1457H.
 */

import React from "react";

class LogoutState extends React.Component {

  render() {
    return (
      <div>
        <input
          id="chkbxLogout"
          type="checkbox"
          onChange={this.props.handleLogoutState}
          />
        <label htmlFor="chkbxLogout">Log-in
          <span style={{color: "orange", marginLeft: "10px" }}>You are logged {(this.props.isLoggedOut) ? 'IN' : 'OUT'}</span>
        </label>
        <p>My Object ob contains {(this.props.myOb.in) ? "IN" : "OUT" }</p>
      </div>
    );
  }
}

export default LogoutState;