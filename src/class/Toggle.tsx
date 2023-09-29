import React, { Component } from "react";
import "./toggle.css";
interface IsToggle {
  OpenModal: boolean;
}
export default class Toggle extends Component<{}, IsToggle> {
  constructor(props: {}) {
    super(props);
    this.state = {
      OpenModal: false,
    };
  }

  handleModal = (status: boolean) => {
    this.setState({
      OpenModal: status,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleModal(true)}>OPEN modal</button>

        {this.state.OpenModal && <Modal action={this.handleModal} />}
      </div>
    );
  }
}
interface Action {
  action: Function;
}

class Modal extends Component<Action> {
  state: { backgroundColor: string; scale: number } = {
    backgroundColor: "",
    scale: 1,
  };
  handleBackgroundColor = (color: string) => {
    this.setState({ backgroundColor: color });
    // Increase the scale by 0.2
    this.setState((prevState) => ({ scale: this.state.scale + 0.2 }));
  };

  render() {
    const modalStyle = {
      backgroundColor: this.state.backgroundColor,
      transform: `scale(${this.state.scale})`,
    };
    return (
      <div className="container-modal">
        <div className="modal" style={modalStyle}>
          <h1>day la modal</h1>
          <button onClick={() => this.handleBackgroundColor("red")}>
            Màu đỏ
          </button>
          <button onClick={() => this.handleBackgroundColor("yellow")}>
            Màu vàng
          </button>
          <button onClick={() => this.handleBackgroundColor("green")}>
            Màu xanh
          </button>
          <button onClick={() => this.props.action(false)}>Dong modal</button>
        </div>
      </div>
    );
  }
}
