import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (

      <nav className="navbar">
        <Link to="/" className="logo">
          TO
        </Link>
        <Link to="/about" className="about">about</Link>
        <Link to="/contact" className="contact">contact</Link>
      </nav>

  );
}
