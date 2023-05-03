import "./App.css";
import { useContext, useState } from "react";
import { DarkModeContext } from "./theme/DarkModeContext";
import { UpperNavbar } from "./navbar/upperNavbar.js";
import { UnderNavBar } from "./navbar/underNavbar.js";
import { HomePages } from "./components/homePages.js";
import { ContactForm } from "./components/ContactForm.js";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [selezionato, setSelezionato] = useState("home");

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
      <UpperNavbar
        selezionato={selezionato}
        setSelezionato={setSelezionato}
      ></UpperNavbar>

      <UnderNavBar
        selezionato={selezionato}
        setSelezionato={setSelezionato}
      ></UnderNavBar>

      <div className="App">
        <div
          className={
            "App-background " + (darkMode ? "light-mode" : "dark-mode")
          }
        >
          <HomePages></HomePages>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
