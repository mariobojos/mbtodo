import React from "react";

class Header extends React.Component {
  render() {
    const username = (typeof this.props.who !== "undefined") ? this.props.who.username : "Unknown User";
    return (
      <header>
        <h3>Welcome, {username}!</h3>
      </header>
    );
  }
}

export default Header;