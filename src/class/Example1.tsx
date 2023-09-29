import React, { Component } from "react";

interface State {
  number: number;
}
export default class Example1 extends Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      number: 0,
    };
  }
  render() {
    return (
      <div className="example">
        <h1>{this.state.number}</h1>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Number Up
        </button>
        <button
          onClick={() => this.setState({ number: this.state.number - 1 })}
        >
          Number Down
        </button>
      </div>
    );
  }
}
