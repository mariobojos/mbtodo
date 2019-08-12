import React from "react";

/**
 * @version Aug 01, 2019
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick() {
    this.setState(prevState =>  {
      return { count: prevState.count + 1 }
    });
  }

  handleClickReset() {
    this.setState({count: 0});
  }

  render() {
    return(
      <div style={{border:"1px solid #333", textAlign: "center"}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Count</button>
        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;