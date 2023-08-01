import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecreament = this.handleDecreament.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
  }

  // Decreament btn event handle
  handleDecreament() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  // Increament btn event handle
  handleIncreament() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecreament}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncreament}>+</button>
      </div>
    );
  }
}

export default Counter;
