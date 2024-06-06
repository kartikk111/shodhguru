import React from 'react';
import '../pagecss/Partners.css';
import cairNepalImage from '../assets/cair-nepal.png'; // Adjust the path as needed
import leadSemanticsImage from '../assets/lead-semantics.png'; 

const Partners = () => {
  return (
    <div className="partners-section">
      <div className="partners-content">
        <h2>Partners</h2>
        <ul>
          <li>1. Patience Usoro Usip, FORRK Labs, University of Uyo, Nigeria</li>
          <li>2. Mounir Hemam, Abbas Laghrour University of Khenchela, Algeria</li>
          <li>3. Ron Ojino, Cooperative University, Kenya</li>
          <li>4. Victor Lopez Cabrera, Universidad Tecnologica de Panama, Panama</li>
          <li>5. Gustavo de Asis Costa, Federal Institute of Education, Science and Technology of Goiás - Campus Jataí, Brazil</li>
          <li>6. Edgard Marx, HTWK Leipzig, Germany</li>
          <li>7. Praveen Kumar Shukla, BBD University Lucknow, India</li>
          <li>8. Tasneem Bano, Sage University, Bhopal, India</li>
          <li>9. Rajan Gupta, VP, Head - Research & Analytics, Analyttica Datalab</li>
          <li>10. Krishna Prasad Ponnekanti, Head, Department of CSE, Anil Neerukonda Institute of Technology and Sciences Visakhapatnam, Andhra Pradesh, India</li>
          <li>11. Tekraj Chhetri, CAIR Nepal & MIT USA</li>
          <li>12. Prasad Yalamanchi, Lead Semantics, USA</li>
          <li>13. Manas Gaur, University of Maryland Baltimore County, USA</li>
          <li>14. Mayank Kejriwal, University of South California, USA</li>
        </ul>
      </div>
      <div className="partners-images">
        <img src={cairNepalImage} alt="CAIR Nepal" />
        <img src={leadSemanticsImage} alt="Lead Semantics" />
      </div>
    </div>
  );
}

export default Partners;
