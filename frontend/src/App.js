import './App.css';
import React, { useRef } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Header
        scrollToAboutMe={() => scrollToRef(aboutMeRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
      />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
