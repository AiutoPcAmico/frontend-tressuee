import React from "react";
import instagram from "../img/instagram-icon.png";
import twitter from "../img/twitter-icon.png";
import facebook from "../img/facebook-icon.png";
import linkedin from "../img/linkedin-icon.png";
import gmail from "../img/gmail-icon.png";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";
import "../App.css";
import "./pages.css";
import "./ContactForm.css";

const ContactForm = () => {
  //const { DarkMode } = useContext(DarkModeContext);
  //<h2 className={DarkMode ? "testolight" : "testodark"}>contatti</h2>
  const { darkMode } = useContext(DarkModeContext);
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="aboutPage">
      <h2
        className={"mx-auto " + (darkMode ? "testolight" : "testodark")}
        style={{ width: "90%", textAlign: "center" }}
      >
        contatti
      </h2>

      <div className={"container " + (darkMode ? "sfondo2" : "sfondo1")}>
        <div className="social-icons">
          <div
            className="social-icon"
            onClick={() => handleClick("https://www.instagram.com")}
          >
            <img src={instagram} alt="Instagram" />
            <span>Instagram</span>
          </div>
          <div
            className="social-icon"
            onClick={() => handleClick("https://www.facebook.com")}
          >
            <img src={facebook} alt="Facebook" />
            <span>Facebook</span>
          </div>
          <div
            className="social-icon"
            onClick={() => handleClick("https://www.linkedin.com")}
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </div>
          <div
            className="social-icon"
            onClick={() => handleClick("https://www.gmail.com")}
          >
            <img src={gmail} alt="Gmail" />
            <span>Gmail</span>
          </div>
          <div
            className="social-icon"
            onClick={() => handleClick("https://www.twitter.com")}
          >
            <img src={twitter} alt="Twitter" />
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactForm };
