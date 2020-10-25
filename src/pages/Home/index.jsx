import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", margin: "20px 10px" }}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ margin: "20px" }}>Home!</div>
    </>
  );
};

export default Home;
