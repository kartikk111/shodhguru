// OurTeam.js
import React from 'react';
import '../pagecss/OurTeam.css';
import sanjupic from '../assets/sanju.png';
import carlospic from '../assets/carlos.png';
import fatimapic from '../assets/fatima.png';
import patiencepic from '../assets/patience.png';
import ronakpic from '../assets/ronak.png';

const OurTeam = () => {
    return (
        <div className="ourteam-section">
            <div className="team-leaders">
                <h3>Team Leader</h3>
                <div className="team-member">
                    <img src={sanjupic} alt="Sanju Tiwari" className="team-member-image" />
                    <div className="team-member-details">
                        <h4>Sanju Tiwari</h4>
                        <p>- Founder and CEO, ShodhGuru Innovation and Research Labs</p>
                        
                    </div>
                </div>
            </div>

            <div className="team-members">
                <h2>Team Members</h2>
                <div className="team-member">
                    <img src={fatimapic} alt="Fatima Zahra Amara" className="team-member-image" />
                    <div className="team-member-details">
                        <h4>Fatima Zahra Amara</h4>
                        <p>- University of Khenchela, Algeria</p>
                        
                    </div>
                </div>
                <div className="team-member">
                    <img src={patiencepic} alt="Patience Bassey Usoro Usip" className="team-member-image" />
                    <div className="team-member-details">
                        <h4>Patience Bassey Usoro Usip</h4>
                        <p>- University of Uyo, Nigeria</p>
                        
                    </div>
                </div>
                <div className="team-member">
                    <img src={ronakpic} alt="Ronak Panchal" className="team-member-image" />
                    <div className="team-member-details">
                        <h4>Ronak Panchal</h4>
                        <p>- Data Scientist, India</p>
                        
                    </div>
                </div>
                <div className="team-member">
                    <img src={carlospic} alt="Carlos F Enguix" className="team-member-image" />
                    <div className="team-member-details">
                        <h4>Carlos F Enguix</h4>
                        <p>- R&D Researcher, Peru</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
