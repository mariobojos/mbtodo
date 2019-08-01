import React from "react";

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "morning";

    if (hours >= 12 && hours < 13) {
      timeOfDay = "noon";
    } else if (hours >= 13 && hours <= 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening";
    }
    return (
      <h3>Good {timeOfDay} to you sir!</h3>
    );
  }
}

export default Greeting;