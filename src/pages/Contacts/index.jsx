import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <Link to="/contacts">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/signin">Form</Link>
      <div style={{ margin: "20px" }}>Contacts!</div>
    </>
  );
};

export default Contacts;
