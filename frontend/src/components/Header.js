import React from 'react';

function Header({ scrollToAboutMe, scrollToSkills, scrollToProjects }) {
  return (
    <div className="header">
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
