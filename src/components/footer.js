import React from 'react';
import aiisc from '../assets/aiisc.png';
import uat from '../assets/uat.png';
import orkg from '../assets/orkg.png';
import index from '../assets/index.png';
import swarm from '../assets/SWARM.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="partners">
        <img src={aiisc} alt="AIISC" />
        <img src={uat} alt="UAT" />
        <img src={orkg} alt="Open Research Knowledge Graph" />
        <img src={index} alt="Index" />
        <img src={swarm} alt="SWARM" />
      </div>
    </footer>
  );
}

export default Footer;
