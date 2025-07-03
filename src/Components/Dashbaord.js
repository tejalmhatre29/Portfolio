import React from "react";
import "./Dashboard.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {  SiMysql } from "react-icons/si";
import { SiPython, SiC } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      
     <header className="navbar">
  <h1 className="logo">Tejal Mhatre</h1>
  <nav>
    <ul className="nav-links">
      <li><Link to="/">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</header>

      <section className="hero">
        <h2>Hello, I'm Tejal 👋</h2>
        <p>A passionate Web Developer building modern apps.</p>
        <Link to="/projects">View my work</Link>
      
      </section>

      <section id="about" className="about-section">
        <div className="glass-card">
          <h2>About Me</h2>
          <p>
            Hello! I'm Tejal Mhatre — a detail-oriented and creative web
            developer with a strong focus on front-end development. I specialize
            in building responsive, accessible, and modern web applications
            using React.js.
          </p>
          <p>
            I'm always eager to collaborate on exciting projects and
            continuously improve my skills in full-stack development.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
  <h2>My Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <FaHtml5 size={30} color="#f97316" />
      <span>HTML</span>
    </div>
    <div className="skill-card">
      <FaCss3Alt size={30} color="#3b82f6" />
      <span>CSS</span>
    </div>
    <div className="skill-card">
      <FaJs size={30} color="#facc15" />
      <span>JavaScript</span>
    </div>
    <div className="skill-card">
      <FaReact size={30} color="#38bdf8" />
      <span>React</span>
    </div>
    <div className="skill-card">
      <FaNodeJs size={30} color="#10b981" />
      <span>Node.js</span>
    </div>
    <div className="skill-card">
      <SiMysql size={30} color="#0ea5e9" />
      <span>MySQL</span>
    </div>
    <div className="skill-card">
  <SiC size={30} color="#a8b9cc" />
  <span>C</span>
</div>
    <div className="skill-card">
  <DiJava size={30} color="#f89820" />
  <span>Java</span>
</div>

<div className="skill-card">
  <SiPython size={30} color="#3776ab" />
  <span>Python</span>
</div>



  </div>
</section>

    </div>
  );
}

export default Dashboard;
