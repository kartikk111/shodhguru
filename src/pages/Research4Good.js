import React from 'react';
import '../pagecss/Research4Good.css';
import svenpic from '../assets/sven.png';
import nandanapic from '../assets/nandana.png';

const Research4Good = () => {
    return (
        <div className="research4good-section">
            <h2>Our Sponsors</h2>
            <div className="sponsor">
                <img src={svenpic} alt="Sven Groppe" className="sponsor-image" />
                <div className="sponsor-details">
                    <h3>Sven Groppe</h3>
                    <p>Institute of Information System (IFIS)</p>
                    <p>Ratzeburger Allee 160 (Building 64 - 2nd Level)</p>
                    <p>D-23562 Lübeck, Germany</p>
                </div>
            </div>
            <div className="sponsor">
                <img src={nandanapic} alt="Nandana Mihindukulasooriya" className="sponsor-image" />
                <div className="sponsor-details">
                    <h3>Nandana Mihindukulasooriya</h3>
                    <p>Senior Research Scientist at IBM Research, NYC</p>
                </div>
            </div>

            <h2>Our Beneficiaries</h2>
            <div className="beneficiary">
                <div className="beneficiary-details">
                    <h3>Gudiya</h3>
                    <p>Class 9</p>
                    <p>Baiswara Inter College Lalganj Raebareli</p>
                    <p>Uttar Pradesh, India</p>
                </div>
            </div>
        </div>
    );
}

export default Research4Good;
