import React from 'react';
import profile from '../profile.JPEG';

function AboutMe() {
    return (
        <div className="aboutme">
            <h2>About Me</h2>
            <img src={profile} alt="Profile Picture" />
            <p>
            I am a recent graduate from the University of Washington Tacoma with a Bachelor of Arts in Computer Science 
            and a minor in Business Data Analytics. I am passionate about software engineering and am looking to gain 
            experience and contribute to the tech community! I bring a knowledge in various languages such as Java and 
            JavaScript (including React and Node.js) and experience with data mining using tools such as Tableau, ML 
            Studio and RapidMiner. I also bring professionalism and great communication skills with my experience in 
            customer service. I am excited to share my knowledge!
            </p>
        </div>
    )
}

export default AboutMe