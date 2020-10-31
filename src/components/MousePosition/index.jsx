import React, { Component } from "react";
import styles from "./MouthePosition.module.css";

class MousePosition extends Component {
  state = {
    xPosition: 0,
    yPosition: 0,
  };

  getPosition = (event) => {
    console.log(event.target.clientX);
    console.log(event);
    this.setState({
      xPosition: event.clientX,
      yPosition: event.clientY,
    });
  };

  render() {
    const { xPosition, yPosition } = this.state;
    return (
      <>
        <div onMouseMove={this.getPosition} className={styles.container}>
          <div>
            X: {xPosition}, Y: {yPosition}
          </div>
        </div>
      </>
    );
  }
}

export default MousePosition;
