import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "30px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 999,
        }}
        aria-label="Scroll to top"
      >
        ▲
      </button>
    )
  );
}

export { ScrollToTop };