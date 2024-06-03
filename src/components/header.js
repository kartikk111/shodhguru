import React from 'react';
import logo from '../assets/header_logo.png';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Shodhguru Logo" className="logo" />
          </Link>
          <Navbar />
        </div>
      </header>
      <div className="news-bar">
        <p>
          <a href="https://www.linkedin.com/in/rishit-agarwal-319901241/"><b>Rishit Agrawal</b></a><a href="#">and</a><a href="https://www.linkedin.com/in/marysalami/"><b>Mary Salami</b></a><a href="#">are selected for internship at the Gurukul of AIISC South Carolina, USA under Prof Amit Sheth.</a>
        </p>
      </div>
    </>
  );
}

export default Header;
