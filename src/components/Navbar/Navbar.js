// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profileIcon from "../../assets/profile-icon.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="HealSpace Logo" />
        <span>HealSpace</span>
      </div>
      <ul className="navbar-links">
        {/* Internal page anchors */}
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>

        {/* My Appointments page link */}
        <li>
          <Link to="/my-appointments">My Appointments</Link>
        </li>

        {/* Profile icon with route link */}
        <li>
          <Link to="/profile">
            <img
              src={profileIcon}
              alt="Profile"
              className="profile-icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
