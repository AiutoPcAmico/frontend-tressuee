import { useContext } from "react";
import { DarkModeContext } from "../theme/DarkModeContext";

function UnderNavBar({ selezionato, setSelezionato }) {
  const { darkMode } = useContext(DarkModeContext);

  const click = (bott) => {
    setSelezionato(bott);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-lightgreen">
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div className="navbar-nav mr-auto header_center">
          <form class="form-inline my-2 my-lg-0 ">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>

        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 header_center">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                className={
                  selezionato === "home"
                    ? "btn btn-outline-success " +
                      (darkMode ? "nav2buttonselectedl" : "nav2buttonselected")
                    : "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={() => {
                  click("home");
                }}
              >
                home
              </button>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                className={
                  selezionato === "shop"
                    ? "btn btn-outline-success " +
                      (darkMode ? "nav2buttonselectedl" : "nav2buttonselected")
                    : "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={() => {
                  click("shop");
                }}
              >
                shop
              </button>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                className={
                  selezionato === "mappa"
                    ? "btn btn-outline-success " +
                      (darkMode ? "nav2buttonselectedl" : "nav2buttonselected")
                    : "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={() => {
                  click("mappa");
                }}
              >
                mappa
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                className={
                  selezionato === "chi"
                    ? "btn btn-outline-success " +
                      (darkMode ? "nav2buttonselectedl" : "nav2buttonselected")
                    : "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={() => {
                  click("chi");
                }}
              >
                chi siamo
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                className={
                  selezionato === "contatti"
                    ? "btn btn-outline-success " +
                      (darkMode ? "nav2buttonselectedl" : "nav2buttonselected")
                    : "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={() => {
                  click("contatti");
                }}
              >
                contatti
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { UnderNavBar };
