import React, {Component} from "react";

class PersonState extends Component {

  constructor() {
    super();
    this.state = {
      name: "Ferdinand",
      age: 20
    }
  }

  render() {
    return (
      <div>
        <h5>{this.state.name} is {this.state.age} years old.</h5>
      </div>
    );
  }

}


export default PersonState;