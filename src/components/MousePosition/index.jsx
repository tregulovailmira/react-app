import React, { Component } from "react";
import styles from "./MouthePosition.module.css";

class MousePosition extends Component {
  state = {
    xPosition: 0,
    yPosition: 0,
  };

  getPosition = (event) => {
    this.setState({
      xPosition: event.clientX,
      yPosition: event.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.getPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.getPosition);
  }

  render() {
    const { xPosition, yPosition } = this.state;
    return (
      this.props.children(xPosition, yPosition)
    );
  }
}

export default MousePosition;
