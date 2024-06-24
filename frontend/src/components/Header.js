import React from 'react';
import * as FaIcons from "react-icons/fa"

function Header({ scrollToHome, scrollToAboutMe, scrollToSkills, scrollToProjects }) {
  return (
    <div className="header">
        <a href="#home" onClick={scrollToHome}><h2>Kevin Truong</h2></a>
        <a href="https://github.com/kevt02"><FaIcons.FaGithub /></a>
                <a href="https://www.linkedin.com/in/kevin-truong-baa329266/"><FaIcons.FaLinkedin /></a>
      <ul>
        <li>
          <a href="#about-me" onClick={scrollToAboutMe}>About Me</a>
        </li>
        <li>
          <a href="#skills" onClick={scrollToSkills}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={scrollToProjects}>Projects</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
