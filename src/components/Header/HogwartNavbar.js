import React from "react";
import { Link } from "react-router-dom";

import "./HogwartNavbar.css";

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default HogwartNavbar;
