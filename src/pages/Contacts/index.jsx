import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", margin: "20px 10px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ margin: "20px" }}>Contacts!</div>
    </>
  );
};

export default Contacts;
