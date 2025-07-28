import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaTelegram, FaGithub, FaGlobe } from "react-icons/fa";
import  Modal  from "../components/Modal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="page-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>MovieSpot is a simple movie search app powered by the OMDB API.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><FaEnvelope /> <a href="mailto:mikmame.dev@gmail.com">Email</a></li>
            <li><FaLinkedin /> <a href="https://linkedin.com/in/mikmame" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><FaTelegram /> <a href="https://t.me/mikmame" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><FaGithub /> <a href="https://github.com/mikmame" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Language</h4>
          <button className="lang-button" onClick={() => setShowModal(true)}>
            <FaGlobe /> Change Language
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span>© {new Date().getFullYear()} MovieSpot</span>
          <a href="#!">Privacy Policy</a>
        </div>
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </footer>
  );
}

export { Footer };
