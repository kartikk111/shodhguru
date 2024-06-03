import React from 'react';
import '../pagecss/About.css';
import aboutImage from '../assets/resandt.png'; // Adjust the path to your image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <p className="about-text">
        ShodhGuru is an organization dedicated to provide innovative ideas in research and education to strengthen skills in various industries (Including areas such as Engineering, Management, Healthcare, etc). <br></br><br></br>
        The primary aim of ShodhGuru is to empower the knowledge of subjects and research activities at a global level. We focus our attention on providing support to underprivileged researchers and students from developing countries who are interested in boosting their knowledge and skills in academia and the rest of their professional career. <br></br><br></br>
        ShodhGuru conducts events that include hands-on design, experiential learning, project building and testing. We provide learning opportunities by experienced experts from around the world. With us, you will explore any number of research objectives with guidance around publications, with a focus on writing methods of qualitative research. <br></br><br></br>
        ShodhGuru Innovation and Research Labs provides outstanding support for research and training to meet research challenges broadly faced by researchers, scholars, and societal needs.
        </p>
      </div>
    </div>
  );
}

export default About;
