import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to='/signin'>Form</Link>
      <div style={{ margin: "20px" }}>Home!</div>
    </>
  );
};

export default Home;
