import logo from "./img/logo.png";
import "./App.css";
import { useContext, useState } from "react";
import { DarkModeContext } from "./theme/DarkModeContext";
import { UpperNavbar } from "./navbar/UpperNavbar.js";
import { SecondNavbar } from "./navbar/SecondNavbar.js";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  /*
<i class="bi bi-incognito"></i>	se non loggato
Person-circle? Oppre foto (se c’è)
Cart (-fill)
Bag(-fill) x ordini
Search

<svg class="bi bi-exclamation-triangle text-success" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  ...
</svg>

  */

  return (
    <div>
      <UpperNavbar></UpperNavbar>
      <SecondNavbar></SecondNavbar>

      <div className="App">
        <header
          className={
            "App-background " + (darkMode ? "light-mode" : "dark-mode")
          }
        >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;
