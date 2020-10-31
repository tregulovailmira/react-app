import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import MousePosition from "./components/MousePosition";
import styles from './components/MousePosition/MouthePosition.module.css'
const Home = lazy(() => import("./pages/Home"));


const App = () => {
  return (
    <>
      <MousePosition>
        {(xPosition, yPosition) => (
          <div className={styles.container}>
            <div>
              X: {xPosition}, Y: {yPosition}
            </div>
          </div>
        )}
      </MousePosition>
    </>
  );
};

export default App;
