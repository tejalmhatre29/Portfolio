import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "DeepDetect – Deepfake Detection System",
    date: "August 2025 – Present",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "Streamlit"],
    points: [
      "Developed an AI-based deepfake detection system using CNN models (ResNet-18).",
      "Classifies images as real or fake with high accuracy.",
      "Built a secure and user-friendly interface with 2 step authentication."
    ],
    github: "https://github.com/tejalmhatre29/DeepDetect-DeepFake",
  },

   {
    title: "MedStock – Medical Inventory Management",
    date: "January 2024",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"],
    points: [
      "MedStock is an medical inventory system with role based access(ADMIN and SALESPERSON)",
      "Enhanced data security by restricting inventory access to authorized users.",
      "Designed an intuitive UI to streamline inventory workflows.",
      "Implemented real-time inventory tracking and expiry monitoring."
    ],
    github: "https://github.com/tejalmhatre29/New-MedStock",
  },
  
  {
    title: "Car Rental System",
    date: "August 2024 – November 2024",
    tech: ["Java (OOP)", "Swing", "AWS"],
    points: [
      "Developed a car rental system with vehicle management and customer bookings.",
      "Applied OOP concepts: abstraction, encapsulation, and polymorphism.",
      "Implemented GUI using Java Swing with dynamic inventory handling."
    ],
    github: "https://github.com/tejalmhatre29",
  },
];

function Projects() {
  return (
    <div>
      <header className="navbar">
        <h1 className="logo">Tejal Mhatre</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <FaCode className="project-icon" />
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
