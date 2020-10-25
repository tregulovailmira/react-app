import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", margin: "20px 10px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ margin: "20px" }}>About!</div>
    </>
  );
};

export default About;
