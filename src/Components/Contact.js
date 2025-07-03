import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaLinkedin , FaGithub} from "react-icons/fa";

function Contact() {
  return (
    <div>
      <header className="navbar">
        <h1 className="logo">Tejal Mhatre</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via the form below or connect with me on social
          media!
        </p>

        <a
          href="https://www.linkedin.com/in/tejal-mhatre-b78887329/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={24} style={{ marginRight: "8px" }} />
          Connect on LinkedIn
        </a>
        <div>
        <a
          href="https://github.com/tejalmhatre29"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
           <FaGithub size={24} style={{ marginRight: "8px" }} />
    GitHub
  </a>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
