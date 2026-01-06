import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ ADD THIS
import "./Certifications.css";

const certifications = [
  {
    title: "Gen AI Exchange Program",
    issuer: "Google",
    year: "2025",
    image: "/certificates/genai.png",
  },
  {
    title: "OCI AI Foundation Associate",
    issuer: "Oracle",
    year: "2025",
    image: "/certificates/oracle.png",
  },
  {
    title: "Gen AI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    year: "2025",
    image: "/certificates/genaidata.png",
  },
  {
    title: "Cyber Security Analyst Job Simulation",
    issuer: "Tata",
    year: "2025",
    image: "/certificates/cyber.png",
  },
  {
    title: "Git SkillUp",
    issuer: "GeeksforGeeks",
    year: "2025",
    image: "/certificates/git.png",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Simplilearn",
    year: "2025",
    image: "/certificates/aws.png",
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ===== NAVBAR HEADER ===== */}
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

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <section className="certifications" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Click on a certificate to view it
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              className="cert-card"
              key={index}
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-thumbnail"
              />
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <span className="year">{cert.year}</span>
            </div>
          ))}
        </div>

        {/* ===== MODAL ===== */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="modal-image"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Certifications;
