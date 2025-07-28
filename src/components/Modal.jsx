import React from "react";
import "../index.css";
import { FaTimes } from "react-icons/fa";

function Modal({ onClose }) {
  console.log("Modal rendered");

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Select Language</h3>
          <FaTimes className="modal-close" onClick={onClose} />
        </div>
        <ul className="language-list">
          {languages.map((lang) => (
            <li key={lang.code} className="language-item">
              <span className="language-flag">{lang.flag}</span>
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;