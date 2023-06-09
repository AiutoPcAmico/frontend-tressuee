import "../pages/pages.css";
import userImagePlaceHolder from "../img/user_placeholder.png";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import prov from "../utils/province.json";
import { useDispatch, useSelector } from "react-redux";
import { destroySession, setSessionUser } from "../stores/sessionInfo";
import { modifyUserDetail, modifyUserPass } from "../api/indexTreessueApi";

//ciaooo
function AccountPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.sessionInfo.user);

  const { darkMode } = useContext(DarkModeContext);
  const [isOnModify, setIsOnModify] = useState(false);
  const [error, setError] = useState(null);
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [account, setAccount] = useState({
    email: user.email || "",
    password: "",
    passwordconferma: "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    phone_number: user.phone_number || "",
    address: user.address || "",
    birth_date: user.birth_date || "", //data gg-mm-aaaa
    zip_code: user.zip_code || "",
    city: user.city || "",
    province: user.province || "",
  });

  const modifyInfo = () => {
    setIsOnModify(true);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPhone(numberString) {
    return /(^3\d{2}\d{7}$)|(^0\d{2,3}\d{4,6}$)/.test(numberString);
  }

  useEffect(() => {
    setError(null);
    if (account.passwordconferma !== "") {
      if (account.password === "") {
        setError("Inserire anche la vecchia password");
      }
    }

    if (!account.first_name || !account.last_name) {
      setError("Compilare il nome e il cognome!");
    }

    if (
      account.phone_number.length > 0 &&
      !isValidPhone(account.phone_number)
    ) {
      setError("Numero di telefono non valido!");
    }

    if (!isValidEmail(account.email)) {
      setError("Email non valida!");
    }
  }, [
    account.email,
    account.phone_number,
    account.first_name,
    account.last_name,
    account.password,
    account.passwordconferma,
  ]);

  const confirmSave = () => {
    console.log({ account });
    setMsgSuccess(false);

    if (account.email && account.first_name && account.last_name) {
      if (error === null) {
        //chiamata di api di salvataggio

        modifyUserDetail(account).then((element) => {
          if (element.isError) {
            setError(element.messageError);
          } else {
            setMsgSuccess(true);
          }
        });

        if (account.password !== "" && account.passwordconferma !== "") {
          modifyUserPass(account.password, account.passwordconferma).then(
            (element) => {
              if (element.isError) {
                setError(element.messageError);
              } else {
                setMsgSuccess(true);
              }
            }
          );
        }

        //se corretto
        setIsOnModify(false);
        dispatch(setSessionUser({ user: account }));
      }
    }
    console.log({ account });
  };

  function logout() {
    dispatch(destroySession());
    navigate("/");
  }

  return (
    <div className="detailsPage">
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
                    style={
                      {
                        //maxHeight: "150px",
                      }
                    }
                    className={
                      "col-sm-3 col-12 text-center pt-3 "
                      //  (darkMode ? "sfondo3" : "sfondo1")
                    }
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "200px",
                        maxWidth: "200px",
                        borderRadius: 100,
                      }}
                      src={userImagePlaceHolder}
                      alt="user placeholder"
                    ></img>
                  </div>
                  <div
                    style={{ width: "49%" }}
                    className={
                      "col-sm-9 col-12 align-self-start text-center " +
                      (darkMode
                        ? "testolight sfondocard1"
                        : "testodark sfondocard3")
                    }
                  >
                    <div style={{ textAlign: "left" }}>
                      <div className="form-group row mt-3">
                        <label
                          htmlFor="emailaccount"
                          className="col-md-3 col-form-label"
                        >
                          Email*
                        </label>
                        <div className="col-md-9">
                          <input
                            type="email"
                            disabled={!isOnModify}
                            className={
                              !isOnModify
                                ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                                : "form-control"
                            }
                            id="emailaccount"
                            value={account.email}
                            onChange={(el) => {
                              setAccount({
                                ...account,
                                email: el.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="passwordaccount"
                          className="col-md-3 col-form-label"
                        >
                          Nuova password
                        </label>
                        <div className="col-md-9">
                          <input
                            type="password"
                            disabled={!isOnModify}
                            className={
                              !isOnModify
                                ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                                : "form-control"
                            }
                            id="passwordaccount"
                            value={account.passwordconferma}
                            onChange={(el) => {
                              setAccount({
                                ...account,
                                passwordconferma: el.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      {account.passwordconferma !== "" && (
                        <div className="form-group row">
                          <label
                            htmlFor="passwordaccount"
                            className="col-md-3 col-form-label"
                          >
                            Password Attuale*
                          </label>
                          <div className="col-md-9">
                            <input
                              type="password"
                              disabled={!isOnModify}
                              className={
                                !isOnModify
                                  ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                                  : "form-control"
                              }
                              id="passwordaccount"
                              value={account.password}
                              onChange={(el) => {
                                setAccount({
                                  ...account,
                                  password: el.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      )}
                      <div className="form-group row">
                        <label
                          htmlFor="nomeaccount"
                          className="col-lg-3 col-form-label"
                        >
                          Nome*
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            disabled={!isOnModify}
                            className={
                              !isOnModify
                                ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                                : "form-control"
                            }
                            id="nomeaccount"
                            value={account.first_name}
                            onChange={(el) => {
                              setAccount({
                                ...account,
                                first_name: el.target.value,
                              });
                            }}
                          />
                        </div>
                        <label
                          htmlFor="cognomeaccount"
                          className="col-lg-3 col-form-label"
                        >
                          Cognome*
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            disabled={!isOnModify}
                            className={
                              !isOnModify
                                ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                                : "form-control"
                            }
                            id="cognomeaccount"
                            value={account.last_name}
                            onChange={(el) => {
                              setAccount({
                                ...account,
                                last_name: el.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*riga sotto img */}
                  <div
                    style={{ textAlign: "left" }}
                    className={
                      " p-3 col-12 " +
                      (darkMode
                        ? "testolight sfondocard1"
                        : "testodark sfondocard3")
                    }
                  >
                    <div className="form-group row">
                      <label
                        htmlFor="telefonoaccount"
                        className="col-sm-3 col-form-label"
                      >
                        Telefono
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          disabled={!isOnModify}
                          className={
                            !isOnModify
                              ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                              : "form-control"
                          }
                          id="telefonoaccount"
                          value={account.phone_number}
                          onChange={(el) => {
                            setAccount({
                              ...account,
                              phone_number: el.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="indirizzoaccount"
                        className="col-sm-3 col-form-label"
                      >
                        Indirizzo
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          disabled={!isOnModify}
                          className={
                            !isOnModify
                              ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                              : "form-control"
                          }
                          id="indirizzoaccount"
                          value={account.address}
                          onChange={(el) => {
                            setAccount({
                              ...account,
                              address: el.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="dataaccount"
                        className="col-md-3 col-sm-3 col-form-label"
                      >
                        Data di nascita
                      </label>
                      {/*diversi step funzionano? */}
                      <div className="col-md-5 col-sm-9">
                        <input
                          type="date"
                          disabled={!isOnModify}
                          className={
                            !isOnModify
                              ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                              : "form-control"
                          }
                          max={new Date().toISOString().split("T")[0]}
                          min={
                            new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 100
                              )
                            )
                              .toISOString()
                              .split("T")[0]
                          }
                          id="dataaccount"
                          value={
                            account.birth_date
                              ? new Date(account.birth_date)
                                  .toISOString()
                                  .split("T")[0]
                              : ""
                          }
                          onChange={(el) => {
                            setAccount({
                              ...account,
                              birth_date: el.target.value,
                            });
                          }}
                        />
                      </div>
                      <label
                        htmlFor="capaccount"
                        className="col-md-1 col-sm-3 col-form-label"
                      >
                        Cap
                      </label>
                      <div className="col-md-3 col-sm-9">
                        <input
                          type="text"
                          maxLength={5}
                          disabled={!isOnModify}
                          className={
                            !isOnModify
                              ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                              : "form-control"
                          }
                          id="capaccount"
                          value={account.zip_code}
                          onChange={(el) => {
                            setAccount({
                              ...account,
                              zip_code: el.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="cittaaccount"
                        className="col-md-2 col-sm-3 col-form-label"
                      >
                        Citta'
                      </label>
                      <div className="col-md-5 col-sm-9">
                        <input
                          type="text"
                          disabled={!isOnModify}
                          className={
                            !isOnModify
                              ? "w-100" // "form-control-plaintext toglie sfondo ma responsive"
                              : "form-control"
                          }
                          id="cittaaccount"
                          value={account.city}
                          onChange={(el) => {
                            setAccount({ ...account, city: el.target.value });
                          }}
                        />
                      </div>
                      <label
                        htmlFor="provinciaaccount"
                        className="col-md-2 col-sm-3 col-form-label"
                      >
                        Provincia
                      </label>
                      <div className="col-md-3 col-sm-9">
                        <select
                          disabled={!isOnModify}
                          className={
                            (!isOnModify
                              ? "form-control-plaintext"
                              : "form-control") + " custom-select"
                          }
                          id="provinciaaccount"
                          value={account.province}
                          onChange={(el) => {
                            setAccount({
                              ...account,
                              province: el.target.value,
                            });
                          }}
                        >
                          <option value={""}></option>
                          {
                            //se vuoto prende la prima in automatico
                            prov.map((p) => {
                              if (p.sigla === account.province) {
                                return <option key={p.sigla}>{p.sigla}</option>;
                              } else {
                                return <option key={p.sigla}>{p.sigla}</option>;
                              }
                            })
                          }
                        </select>
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
            {!isOnModify && (
              <button
                type="button"
                className={
                  "btn btn-outline-success mt-3 " +
                  (darkMode ? "nav2button" : "nav2buttonl")
                }
                onClick={modifyInfo}
              >
                <i className="bi bi-pencil"></i>
                {" modifica"}
              </button>
            )}
            {!!isOnModify && (
              <button
                type="button"
                disabled={!!error}
                className={
                  "btn btn-outline-success mt-3 " +
                  (darkMode ? "nav2button" : "nav2buttonl")
                }
                onClick={confirmSave}
              >
                <i className="bi bi-check"></i>
                {" salva"}
              </button>
            )}

            {error && (
              <div style={{ textAlign: "left" }}>
                <p className="alert alert-danger mt-3">
                  <b>Errore!</b>
                  <br></br>
                  <span>{error}</span>
                </p>
              </div>
            )}

            {msgSuccess && (
              <div className="alert alert-success" role="alert">
                Utenza modifica con successo!<br></br>Buon Shopping!
              </div>
            )}

            <p>
              <button
                type="button"
                onClick={logout}
                className={
                  "btn btn-outline-success " +
                  (darkMode ? "nav2buttonl" : "nav2button")
                }
              >
                Logout
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AccountPage };
