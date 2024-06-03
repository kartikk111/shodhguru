// src/components/navbar.js

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/students" className="nav-link">Students</Link>
      <Link to="/our-team" className="nav-link">Our Team</Link>
      <div className="dropdown" ref={dropdownRef}>
        <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
          Training
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/completed-projects" className= "dropdown-item">Completed Projects</Link>
            <Link to="/partners" className="dropdown-item">Partners</Link>
          </div>
        )}
      </div>
      <Link to="/research4good" className="nav-link">Research4Good</Link>
      <Link to="/contact-us" className="nav-link">Contact Us</Link>
    </nav>
  );
}

export default Navbar;
