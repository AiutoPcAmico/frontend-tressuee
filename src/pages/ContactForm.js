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
import logo from "../img/logo.png";
const ContactForm = () => {
  //const { DarkMode } = useContext(DarkModeContext);
  //<h2 className={DarkMode ? "testolight" : "testodark"}>contatti</h2>
  const { darkMode } = useContext(DarkModeContext);
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="contact-class">
      <div className="credits">
        <div className="aboutPage">
          <h2
            className={"mx-auto " + (darkMode ? "testolight" : "testodark")}
            style={{ width: "90%", textAlign: "center" }}
          >
            Contatti
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
        <Footer />
      </div>
    </div>
  );
};

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      {" "}
      <h2
        className={"mx-auto " + (darkMode ? "testolight" : "testodark")}
        style={{ width: "90%", textAlign: "center" }}
      >
        Credits
      </h2>
      <div className={"footer " + (darkMode ? "sfondo2" : "sfondo1")}>
        <div className="text_contacts">
          <img className="img" src={logo} alt=" " />
          <p>
            <b>Abdelaziz Omar</b> : Frontend Developer{" "}
          </p>
          <p>
            {" "}
            <b>Andrea Felappi</b> : Responsabile del Progetto e Frontend Logic
            Developer{" "}
          </p>
          <p>
            {" "}
            <b>Lisa Donadoni</b> : Frontend GUI and Logic Developer{" "}
          </p>
          <p>
            {" "}
            <b>Cardillo Giacomo</b> : Backend Developer{" "}
          </p>
          <p>
            {" "}
            <b>Roman Davor</b> : Backend Developer{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export { Footer, ContactForm };
