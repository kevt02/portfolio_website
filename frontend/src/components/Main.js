import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'

function Main() {
    return (
        <div>

            <AboutMe />
            <div className="skills">
                <h2>Skills</h2>
            </div>
            <Projects />
        </div>
    )
}

export default Main