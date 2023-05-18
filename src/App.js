import "./App.css";
import { useContext, useState } from "react";
import { DarkModeContext } from "./theme/DarkModeContext";
import { FirstNavbar } from "./navbar/firstNavbar";
import { UnderNavBar } from "./navbar/underNavbar.js";
import { RouterHandler } from "./routes/routeHandler";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [selezionato, setSelezionato] = useState("home");

  return (
    <div
      className={
        "App App-background text-justify " +
        (darkMode ? "light-mode" : "dark-mode")
      }
    >
      <FirstNavbar
        selezionato={selezionato}
        setSelezionato={setSelezionato}
      ></FirstNavbar>

      <UnderNavBar
        selezionato={selezionato}
        setSelezionato={setSelezionato}
      ></UnderNavBar>

      <RouterHandler setSelezionato={setSelezionato} />
    </div>
  );
}

export default App;
