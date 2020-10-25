import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Link to="/contacts">Home</Link>
      <Link to="/about">Contacts</Link>
      <Link to="/signin">Form</Link>
      <div style={{ margin: "20px" }}>About!</div>
    </>
  );
};

export default About;
