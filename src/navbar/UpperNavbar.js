import { useContext } from "react";
import { DarkModeContext } from "../theme/DarkModeContext";
import logo from "../img/logo.png";

function UpperNavbar({ selezionato, setSelezionato }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const click = (bott) => {
    setSelezionato(bott);
    //if(bott=='home')
  };

  return (
    <nav
      className={
        "navbar navbar-light sticky-top " +
        (darkMode ? "upper-navbar-dark" : "upper-navbar-light")
      }
    >
      <a
        className={"navbar-brand " + (darkMode ? "testolight" : "testodark")}
        href="#"
      >
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        &nbsp;&nbsp;Treessue
      </a>
      <ul className=" navbar-nav ml-auto mt-2 mt-lg-0 upper-navbar">
        <li className="nav-item ">
          <button
            className={
              selezionato === "account"
                ? "btn btn-outline-success " +
                (darkMode ? "nav1buttonselectedl" : "nav1buttonselected")
                : "btn btn-outline-success " +
                (darkMode ? "nav1buttonl" : "nav1button")
            }
            onClick={() => {
              click("account");
            }}
          >
            <i class="bi bi-incognito"></i>
          </button>
        </li>
        <li class="nav-item ml-2">
          <button
            className={
              selezionato === "ordini"
                ? "btn btn-outline-success " +
                (darkMode ? "nav1buttonselectedl" : "nav1buttonselected")
                : "btn btn-outline-success " +
                (darkMode ? "nav1buttonl" : "nav1button")
            }
            onClick={() => {
              click("ordini");
            }}
          >
            <i class="bi bi-bag"></i>
          </button>
        </li>

        <li class="nav-item ml-2">
          <button
            className={
              selezionato === "cart"
                ? "btn btn-outline-success " +
                (darkMode ? "nav1buttonselectedl" : "nav1buttonselected")
                : "btn btn-outline-success " +
                (darkMode ? "nav1buttonl" : "nav1button")
            }
            onClick={() => {
              click("cart");
            }}
          >
            <i class="bi bi-cart"></i>
          </button>
        </li>
        <li class="nav-item ml-2">
          <button
            className=" btn btn-outline-success nav2button"
            onClick={() => {
              toggleDarkMode();
            }}
          >
            <i class={!darkMode ? "bi-brightness-high " : "bi-moon-fill"}></i>
            &nbsp;Tema
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { UpperNavbar };
