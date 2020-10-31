import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import MousePosition from "./components/MousePosition";
import Watch from "./components/Watch";
import styles from "./components/MousePosition/MouthePosition.module.css";

const App = () => {
  return (
    <>
      <Watch />
    </>
    /* <MousePosition>
        {(xPosition, yPosition) => (
          <div className={styles.container}>
            <div>
              X: {xPosition}, Y: {yPosition}
            </div>
          </div>
        )}
      </MousePosition>  */
  );
};

export default App;
