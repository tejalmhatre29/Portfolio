import React from "react";
import "./Projects.css";
import { Link } from 'react-router-dom';



function Project() {
  return (
    <div>
     <header className="navbar">
  <h1 className="logo">Tejal Mhatre</h1>
  <nav>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>  
      <li><Link to="/">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </header>

  <section className="projects-section">
  <h2 className="section-title">My Projects</h2>
  <p className="section-subtitle">Here's a collection of my recent work...</p>

  <div className="projects-grid">
    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A personal portfolio built with React, showcasing skills and projects.</p>
      <div className="project-links">
        <a href=" " >GitHub </a>
        <a href=" ">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>MedStock</h3>
      <p>Full-stack inventory manager using React, Node.js, and MySQL.</p>
      <div className="project-links">
        <a href=" https://github.com/tejalmhatre29/New-MedStock.git">GitHub</a>
        <a href="">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3> </h3>
      <p></p>
      <div className="project-links">
        <a href="">GitHub</a>
        <a href="" >Live Demo</a>
      </div>
    </div>

    <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cv-view-button"
>
  📄 View My CV
</a>

  </div>
</section>




    </div> 
  );
}

export default Project;
