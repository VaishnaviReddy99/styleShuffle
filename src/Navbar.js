import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          StyleShuffle
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/login">Sign In</a>
          </li>
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/profile">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
