import { useContext } from "react";
import { DarkModeContext } from "../theme/DarkModeContext";
import logo from "../img/logo.png";

function UpperNavbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        &nbsp;&nbsp;Bootstrap
      </a>

      <button>
        <i class="bi bi-incognito"></i>
      </button>
      <i class="bi bi-bag"></i>
      <i class="bi bi-cart"></i>

      <i
        class="bi bi-brightness-high"
        onClick={() => {
          toggleDarkMode();
        }}
      ></i>
    </nav>
  );
}

export { UpperNavbar };
