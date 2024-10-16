// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure the CSS for Navbar is applied

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" /> {/* Update image path */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
        <li><Link to="/forum-events">Forum + Events</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li>
          <input type="text" placeholder="Search..." className="search-box" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
