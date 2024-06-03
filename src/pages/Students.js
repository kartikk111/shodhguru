// Students.js
import React from 'react';
import '../pagecss/Students.css'; 

const Students = () => {
    return (
        <div className="students-section">
            <h2>Students</h2>
            <p>(Showcase the list of students who have completed an engagement with Shodhguru)</p>
            <div className="student-categories">
                <div className="student-category">
                    <h3>Internships</h3>
                    <ul>
                        <li>Hashwanth Sutharapu, NIT: Jalandhar, India</li>
                        <li>Akshit Duggal, NIT: Jalandhar, India</li>
                        <li>Shivansh Gupta, JIIT Noida (Worked with KG4ASTRA using Neo4j)</li>
                        <li>Kartik Gokhale, VIT, Mumbai, India</li>
                    </ul>
                </div>

                <div className="student-category">
                    <h3>Graduate Students</h3>
                    <ul>
                        <li>Ruben Barrera, University of Autonoma Tamaulipas, Mexico (Currently working with MEXIN)</li>
                        <li>Baldomero Ferrer Martinez, University of Autonoma Tamaulipas, Mexico (2021)</li>
                        <li>Masters Students of Texas A&M University, Kings Willey, Texas, USA (2020)</li>
                    </ul>
                </div>

                <div className="student-category">
                    <h3>PhD Students</h3>
                    <ul>
                        <li>Yogeshvari Jashvanthbhai Makwana, Rai University, Gujarat, India</li>
                        <li>Patil Madhuri Balasaheb, Rai University, Gujarat, India</li>
                        <li>Nina Mishra Chaturvedi, Maharshi University, Lucknow, India</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Students;
