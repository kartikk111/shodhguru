import React from 'react';
import homepage from '../assets/homepage.png';
import '../App.css'; // Assuming you want to add specific styles for the Home component

function Home() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>ShodhGuru</h1>
          <h2>Innovation and Research Labs</h2>
          <p>"Grow with Knowledge"</p>
        </div>
        <img src={homepage} alt="Main Content Image" className="main-image" />
      </div>
    </main>
  );
}

export default Home;
