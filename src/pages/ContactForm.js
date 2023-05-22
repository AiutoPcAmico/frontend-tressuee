import React from "react";
import "../App.css";

const ContactForm = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="social-icons">
      <div
        className="social-icon"
        onClick={() => handleClick("https://www.instagram.com")}
      >
        <img src="../img/instagram-icon.png" alt="Instagram" />
      </div>
      <div
        className="social-icon"
        onClick={() => handleClick("https://www.facebook.com")}
      >
        <img src="../img/facebook-icon.png" alt="Facebook" />
      </div>
      <div
        className="social-icon"
        onClick={() => handleClick("https://www.linkedin.com")}
      >
        <img src="../img/linkedin-icon.png" alt="LinkedIn" />
      </div>
      <div
        className="social-icon"
        onClick={() => handleClick("https://www.gmail.com")}
      >
        <img src="../img/gmail-icon.png" alt="Gmail" />
      </div>
      <div
        className="social-icon"
        onClick={() => handleClick("https://www.twitter.com")}
      >
        <img src="../img/twitter-icon.png" alt="Twitter" />
      </div>
    </div>
  );
};

export { ContactForm };
