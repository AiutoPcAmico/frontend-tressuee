import "../pages/pages.css";
import logo from "../img/logo.png";
import pla from "../img/pla_image.jpg";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useEffect, useState } from "react";

//ciaooo
function AccountPage() {
  const { darkMode } = useContext(DarkModeContext);
  const [account, setAccount] = useState([]);

  return (
    <div className="detailsPage">
      <h2 className={darkMode ? "testolight" : "testodark"}>Account</h2>
      <div className=" text flex-column" style={{}}>
        <div className="row flex-wrap align-items-center pb-3">
          <div
            style={{ width: "49%" }}
            className={
              "col-sm-8 col-12 text-center pt-3 " +
              (darkMode ? "sfondo3" : "sfondo1")
            }
          >
            {/*immagine + dati */}
            <div className="detailsPage">
              {/*<h2 className={darkMode ? "testolight" : "testodark"}>Account</h2>*/}
              <div className=" text flex-column" style={{}}>
                <div className="row flex-wrap align-items-center pb-3">
                  <div
                    style={{ width: "49%" }}
                    className={
                      "col-sm-4 col-12 text-center pt-3 " +
                      (darkMode ? "sfondo3" : "sfondo1")
                    }
                  >
                    immagine profilo
                  </div>
                  <div
                    style={{ width: "49%" }}
                    className={
                      "col-sm-8 col-12 align-self-start text-center sfondo2 " +
                      (darkMode ? "testolight" : "testodark")
                    }
                  >
                    <div style={{ textAlign: "left" }}>
                      <div class="form-group row">
                        <label
                          for="staticEmail"
                          class="col-xl-2 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-xl-10">
                          <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="staticEmail"
                            value="email@example.com"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword"
                          class="col-xl-2 col-form-label"
                        >
                          Password
                        </label>
                        <div class="col-xl-10">
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ width: "49%" }}
            className={
              "col-sm-4 col-12 align-self-start text-center sfondo2 " +
              (darkMode ? "testolight" : "testodark")
            }
          >
            <p style={{ fontSize: "25px", textAlign: "right" }}>Totale</p>

            <div style={{ textAlign: "left" }}>
              <p>cose da scrivere dopo</p>
              <p>
                <b>€</b>
              </p>
            </div>
            <p>
              <button
                type="button"
                className={
                  "btn btn-outline-success " +
                  (darkMode ? "nav2buttonl" : "nav2button")
                }
              >
                log-out
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AccountPage };
