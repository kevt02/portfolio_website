import React from 'react';
import profile from '../profile.JPEG';

function Home() {
    return (
        <div className="home">

            <img src={profile} alt="Profile Picture" />
            
            <div className="welcome"><h1>Welcome,</h1>
            <p>my name is Kevin, an aspiring Software Developer</p></div>
        </div>
    )
}

export default Home