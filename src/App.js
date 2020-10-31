import React from "react";
import "./App.css";
import Watch from "./components/Watch";

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
