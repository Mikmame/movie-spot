import React from "react";

const Header = ({ onReset }) => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a
          href="#!"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            if (onReset) onReset();
          }}
        >
          MovieSpot
        </a>
      </div>
    </nav>
  );
};

export { Header };
