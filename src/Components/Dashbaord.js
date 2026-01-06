import React from "react";
import "./Dashboard.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPython, SiC } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Link } from "react-router-dom";
//import { FaGitAlt, FaAws } from "react-icons/fa";
import { SiPytorch, SiVisualstudiocode } from "react-icons/si";

function Dashboard() {
  return (
    <div>
      <header className="navbar">
        <h1 className="logo">Tejal Mhatre</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Hello, I'm Tejal 👋</h2>
        <p>
          3rd-year Computer Engineering Student | Web, Cloud & AI Enthusiast
        </p>
        <Link to="/projects">View my projects</Link>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          View my Resume
        </a>
      </section>
      

      <section id="about" className="about-section">
        <div className="glass-card">
          <h2>About Me</h2>
          <p>
            I’m a detail-oriented and creative Computer Engineering student with
            a strong focus on web development and AI projects. I enjoy building
            practical projects, problem-solving, and exploring modern
            technologies.
          </p>
          <p>
            Currently in 3rd year at Rajiv Gandhi Institute of Technology, CGPA:
            9.62/10. Always eager to collaborate on exciting projects and
            improve my skills.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>My Skills</h2>

        {/* Languages */}
        <div className="skills-category">
          <h3>Languages</h3>
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
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <FaReact size={30} color="#38bdf8" />
              <span>React</span>
            </div>

            <div className="skill-card">
              <FaNodeJs size={30} color="#10b981" />
              <span>Node.js</span>
            </div>

            <div className="skill-card">
              <DiJava size={30} color="#f89820" />
              <span>Java Swing</span>
            </div>

            <div className="skill-card">
              <SiPytorch size={30} color="#EE4C2C" />
              <span>PyTorch</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3>Tools & Databases</h3>
          <div className="skills-grid">
            <div className="skill-card">
              {/* <SiMysql size={30} color="#0ea5e9" />*/}
              <span>MySQL</span>
            </div>
            <div className="skill-card">
              {/*<SiMysql size={30} color="#0ea5e9" />*/}
              <span>AWS</span>
            </div>
            <div className="skill-card">
              {/*<SiMysql size={30} color="#0ea5e9" />*/}
              <span>Git</span>
            </div>
            <div className="skill-card">
              {/*<SiMysql size={30} color="#0ea5e9" />*/}
              <span>VsCode</span>
            </div>
          </div>
        </div>
      </section>

     {/* { Education & Contact Cards }
      <section className="education-section">
        <h2>Education & Contact</h2>

        <div className="education-grid">
          <div className="edu-card">
            <h3>🎓 Education</h3>
            <p>B.E. in Computer Engineering</p>
            <p>3rd Year | CGPA: 9.62 / 10</p>
          </div>

          <div className="edu-card">
            <h3>🏫 College</h3>
            <p>Rajiv Gandhi Institute of Technology</p>
            <p>Mumbai, Maharashtra</p>
          </div>

          <div className="edu-card">
            <h3>🌐 Profiles</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="edu-card">
            <h3>📍 Address</h3>
            <p>Mumbai, Maharashtra</p>
            <p>India</p>
          </div>
        </div>
      </section>*/}
    </div>
  );
}

export default Dashboard;
