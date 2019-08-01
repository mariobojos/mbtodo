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
        <h5 onMouseOver={() => console.log("Yea " + this.state.name + "!")}>{this.state.name} is {this.state.age} years old.</h5>
        <button onClick={() => alert(this.state.name)}>Alert me</button>
      </div>
    );
  }

}


export default PersonState;