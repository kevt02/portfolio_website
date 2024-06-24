import React from 'react';
import UW from '../uw.jpg'

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="intro">
                <img src={UW} alt="UW Logo" />
                <p id="education">I am a recent graduate from the University of Washington Tacoma with a Bachelor of Arts in Computer Science
                    and a minor in Business Data Analytics.</p>
            </div>
            <p id="statement">
                I am passionate about software engineering and am looking to gain
                experience and contribute to the tech community! I bring a knowledge in various languages such as Java and
                JavaScript (including React and Node.js) and experience with data mining using tools such as Tableau, ML
                Studio and RapidMiner. I also bring professionalism and great communication skills with my 6+ years of experience in
                customer service. I am excited to share my knowledge!
            </p>
        </div>
    )
}

export default AboutMe