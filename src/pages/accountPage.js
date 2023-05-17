import "../pages/pages.css";
import logo from "../img/logo.png";
import pla from "../img/pla_image.jpg";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useEffect, useState } from "react";

//ciaooo
function AccountPage() {
  const { darkMode } = useContext(DarkModeContext);
  const [account, setAccount] = useState([]);
  const [mod, setMod] = useState(true);
  const [email, setEmail] = useState("prova");

  const disable = () => {
    setMod(!mod);
    //console.log(mod);
  };

  return (
    <div className="detailsPage">
      {/*ciaooooooo 👋 */}
      <h2
        className={darkMode ? "testolight" : "testodark"}
        style={{ width: "50%" }}
      >
        Account
      </h2>
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
            <div className="m-2">
              {/*<h2 className={darkMode ? "testolight" : "testodark"}>Account</h2>*/}
              <div className=" text flex-column" style={{}}>
                <div className="row flex-wrap align-items-center pb-3">
                  <div
                    style={{ width: "49%" }}
                    className={
                      "col-sm-3 col-12 text-center pt-3 " +
                      (darkMode ? "sfondo3" : "sfondo1")
                    }
                  >
                    immagine profilo
                  </div>
                  <div
                    style={{ width: "49%" }}
                    className={
                      "col-sm-9 col-12 align-self-start text-center sfondo2 " +
                      (darkMode ? "testolight" : "testodark")
                    }
                  >
                    <div style={{ textAlign: "left" }}>
                      <div class="form-group row">
                        <label
                          for="emailaccount"
                          class="col-md-3 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-md-9">
                          <input
                            type="text"
                            disabled={mod}
                            //meglio cambiare nome

                            //
                            className={
                              mod ? "form-control-plaintext" : "form-control"
                            }
                            id="emailaccount"
                            //value="email@example.com"
                            value={email}
                            onChange={(el) => {
                              setEmail(el.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="passwordaccount"
                          class="col-md-3 col-form-label"
                        >
                          Password
                        </label>
                        <div class="col-md-9">
                          <input
                            type="password"
                            class="form-control"
                            id="passwordaccount"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="nomeaccount"
                          class="col-lg-3 col-form-label"
                        >
                          Nome
                        </label>
                        <div class="col-lg-3">
                          <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="nomeaccount"
                            value="nome"
                          />
                        </div>
                        <label
                          for="cognomeaccount"
                          class="col-lg-3 col-form-label"
                        >
                          Cognome
                        </label>
                        <div class="col-lg-3">
                          <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="cognomeaccount"
                            value="cognome"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*riga sotto img 
                  provincia 
                  paese nazione?
                  citta
                  */}
                  <div
                    style={{ textAlign: "left" }}
                    className={
                      "sfondo2 p-3 col-12 " +
                      (darkMode ? "testolight" : "testodark")
                    }
                  >
                    <div class="form-group row">
                      <label
                        for="telefonoaccount"
                        class="col-sm-3 col-form-label"
                      >
                        Telefono
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="telefonoaccount"
                          value="email@example.com"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="indirizzoaccount"
                        class="col-sm-3 col-form-label"
                      >
                        Indirizzo
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="indirizzoaccount"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="dataaccount"
                        class="col-md-2 col-sm-3 col-form-label"
                      >
                        Data
                      </label>
                      {/*diversi step funzionano? */}
                      <div class="col-md-5 col-sm-9">
                        <input
                          type="date"
                          readonly
                          class="form-control"
                          id="dataaccount"
                          value=""
                        />
                      </div>
                      <label
                        for="capaccount"
                        class="col-md-2 col-sm-3 col-form-label"
                      >
                        Cap
                      </label>
                      <div class="col-md-3 col-sm-9">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="capaccount"
                          value="cognome"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="cittaaccount"
                        class="col-md-2 col-sm-3 col-form-label"
                      >
                        Citta'
                      </label>
                      <div class="col-md-5 col-sm-9">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="cittaaccount"
                          value="cognome"
                        />
                      </div>
                      <label
                        for="provinciaaccount"
                        class="col-md-3 col-sm-3 col-form-label"
                      >
                        Provincia
                      </label>
                      <div class="col-md-2 col-sm-9">
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="provinciaaccount"
                          value="cognome"
                        />
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
              "col-sm-4 col-12 text-center sfondo2 " +
              (darkMode ? "testolight" : "testodark")
            }
          >
            <p style={{ fontSize: "25px", textAlign: "right" }}>Totale</p>
            {mod && (
              <button
                type="button"
                className={
                  "btn btn-outline-success " +
                  (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={disable}
              >
                <i class="bi bi-pencil"></i>
                {" modifica"}
              </button>
            )}
            {!mod && (
              <button
                type="button"
                className={
                  "btn btn-outline-success " +
                  (darkMode ? "nav2buttonl" : "nav2button")
                }
                onClick={disable}
              >
                <i class="bi bi-check"></i>
                {" salva"}
              </button>
            )}
            <div style={{ textAlign: "left" }}>
              <p>cose da scrivere dopo</p>
              <p>
                <b>
                  per esempio gli errori - almeno li vedi sempre xke clicchi
                  salva
                </b>
              </p>
              <p>
                metterei un altro button mod/salva dalla parte opposta di
                'accoun'
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
        I tuoi dispositivi
        <div className="d-flex flex-wrap justify-content-center">
          {/*listProduct.map((p, i) => {
          return (
            <CardProdotto
              singleProduct={p}
              indice={i}
              key={p.id}
            ></CardProdotto>
          );
        })*/}
          <div
            className={"card m-2 " + (darkMode ? "sfondocard2" : "sfondocard1")}
            style={{ width: "18rem" }}
            onClick={() => {
              //navigateToDetails(singleProduct.id);
            }}
          >
            <img
              //src={getImage()}
              className="card-img-top mx-auto mt-1"
              //alt={`${singleProduct.category} icon`}
              style={{ width: "150px" }}
            />

            <div className="card-body">
              <h5 className="card-title">{/*singleProduct.name*/}nome</h5>
              <p className="card-text small">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                tipo
              </p>
              <p className="card-text">se torre num fazzoletti?</p>

              <button
                className="btn btn-outline-success nav2button"
                onClick={() => {
                  //navigateToDetails(singleProduct.id);
                }}
              >
                Visualizza i dettagli!
              </button>
            </div>
          </div>
          <div
            className={"card m-2 " + (darkMode ? "sfondocard2" : "sfondocard1")}
            style={{ width: "18rem" }}
            onClick={() => {
              //navigateToDetails(singleProduct.id);
            }}
          >
            <img
              //src={getImage()}
              className="card-img-top mx-auto mt-1"
              //alt={`${singleProduct.category} icon`}
              style={{ width: "150px" }}
            />

            <div className="card-body">
              <h5 className="card-title">
                {/*singleProduct.name*/}nome pagina per
                modifica?????????????????????????????????????
              </h5>
              <p className="card-text small">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                tipo
              </p>
              <p className="card-text">Affrettati!</p>

              <button
                className="btn btn-outline-success nav2button"
                onClick={() => {
                  //navigateToDetails(singleProduct.id);
                }}
              >
                Visualizza i dettagli!
              </button>
            </div>
          </div>
          <div
            className={"card m-2 " + (darkMode ? "sfondocard2" : "sfondocard1")}
            style={{ width: "18rem" }}
            onClick={() => {
              //navigateToDetails(singleProduct.id);
            }}
          >
            <img
              //src={getImage()}
              className="card-img-top mx-auto mt-1"
              //alt={`${singleProduct.category} icon`}
              style={{ width: "150px" }}
            />

            <div className="card-body">
              <h5 className="card-title">{/*singleProduct.name*/}nome dato</h5>
              <p className="card-text small">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                tipo articolo
              </p>
              <p className="card-text">Affrettati! è gratuita!</p>

              <button
                className="btn btn-outline-success nav2button"
                onClick={() => {
                  //navigateToDetails(singleProduct.id);
                }}
              >
                Visualizza i dettagli!
              </button>
            </div>
          </div>
          <div
            className={"card m-2 " + (darkMode ? "sfondocard2" : "sfondocard1")}
            style={{ width: "18rem" }}
            onClick={() => {
              //navigateToDetails(singleProduct.id);
            }}
          >
            <img
              //src={getImage()}
              className="card-img-top mx-auto mt-1"
              //alt={`${singleProduct.category} icon`}
              style={{ width: "150px" }}
            />

            <div className="card-body">
              <h5 className="card-title">{/*singleProduct.name*/}nome</h5>
              <p className="card-text small">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                tipo
              </p>
              <p className="card-text">La spedizione gratuita!</p>

              <button
                className="btn btn-outline-success nav2button"
                onClick={() => {
                  //navigateToDetails(singleProduct.id);
                }}
              >
                Visualizza i dettagli!
              </button>
            </div>
          </div>
          <div
            className={"card m-2 " + (darkMode ? "sfondocard2" : "sfondocard1")}
            style={{ width: "18rem" }}
            onClick={() => {
              //navigateToDetails(singleProduct.id);
            }}
          >
            <img
              //src={getImage()}
              className="card-img-top mx-auto mt-1"
              //alt={`${singleProduct.category} icon`}
              style={{ width: "150px" }}
            />

            <div className="card-body">
              <h5 className="card-title">{/*singleProduct.name*/}nome</h5>
              <p className="card-text">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                tipo
              </p>
              <p className="card-text">Affrettati! La spedizione è gratuita!</p>

              <button
                className="btn btn-outline-success nav2button"
                onClick={() => {
                  //navigateToDetails(singleProduct.id);
                }}
              >
                Visualizza i dettagli!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AccountPage };
