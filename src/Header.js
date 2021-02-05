import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h3>Lambda Eats</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Now</Link>
      </nav>
    </header>
  );
}
