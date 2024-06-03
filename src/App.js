import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
// import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Students from './pages/Students';
import OurTeam from './pages/OurTeam';
import CompletedProjects from './pages/CompletedProjects';
import Partners from './pages/Partners';
import Research4Good from './pages/Research4Good';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/students" element={<Students />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/completed-projects" element={<CompletedProjects />} /> {'./pages/CompletedProjects'}
          <Route path="/partners" element={<Partners />} /> {'./pages/Partners'}
          <Route path="/research4good" element={<Research4Good />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/partners" element={<Partners />} /> Add Partners route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
