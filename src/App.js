import "./App.css";
import { useContext, useState } from "react";
import { DarkModeContext } from "./theme/DarkModeContext";
import { UnderNavBar } from "./navbar/underNavbar.js";
import { HomePages } from "./pages/homePages.js";
import { ContactForm } from "./pages/ContactForm.js";
import { Route, Routes, Navigate } from "react-router-dom";
import { Error404 } from "./pages/error404";
import { FirstNavbar } from "./navbar/firstNavbar";
import { ListProducts } from "./pages/listProducts";
import { TowersMap } from "./pages/towersMap";
import { About } from "./pages/about";

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
    <div
      className={
        "App App-background " + (darkMode ? "light-mode" : "dark-mode")
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

      <Routes>
        <Route index element={<HomePages setSelezionato={setSelezionato} />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/shop" element={<ListProducts />} />
        <Route path="/maps" element={<TowersMap />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
