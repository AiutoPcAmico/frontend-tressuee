import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../theme/DarkModeContext";

function RegisterCardComponent() {
  const [canIDoRegistration, setCanIDoRegistration] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nome: "",
    cognome: "",
    data: "",
    telefono: "",
    cap: null,
    via: "",
    paese: "",
    provincia: "",
  });

  function checkIsAllCompleted() {
    var error = false;
    if (
      user.password !== user.passwordConfirm ||
      !user.password ||
      !user.passwordConfirm
    ) {
      setErrorMessage("Le password non corrispondono!\nRiprova");
      error = true;
    }

    if (!isValidEmail(user.username)) {
      setErrorMessage("Email non valida.\nRiprova");
      error = true;
    }

    return !error;
  }

  function doRegistration() {
    const canIProceed = checkIsAllCompleted();
    console.log({ canIProceed });
    if (canIProceed) {
      //chiamata API al login
      console.log("Ho fatto il login con");
      console.log({ user });
      document.getElementById("togglemodal").click();
    }
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    console.log({ user });
    if (
      user.username &&
      user.password &&
      user.passwordConfirm &&
      user.nome &&
      user.cognome
    ) {
      setErrorMessage("");
      setCanIDoRegistration(true);
      console.log("tuttovqalido!");
    } else {
      setCanIDoRegistration(false);
      setErrorMessage("Completa tutti i campi!");
    }
  }, [
    user.username,
    user.cognome,
    user.nome,
    user.password,
    user.passwordConfirm,
    user,
  ]);

  return (
    <div
      style={{
        //niente per lui è già allineato :'(
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="align-items-center justify-content-center">
        <div className="form-group row mx-auto fadeIn second">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10 ">
            <input
              type="text"
              className="form-control  registerStyle"
              id="staticEmail"
              value={user.username}
              placeholder="Inserisci la tua email..."
              required={true}
              onChange={(el) => {
                setUser({ ...user, username: el.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group row mx-auto fadeIn third">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control  registerStyle"
              id="inputPassword"
              placeholder="Inserisci la password"
              required={true}
              onChange={(el) => {
                setUser({ ...user, password: el.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group row mx-auto fadeIn fourth">
          <label
            htmlFor="inputPasswordConfirm"
            className="col-sm-2 col-form-label"
          >
            Ripeti:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control  registerStyle"
              id="inputPasswordConfirm"
              required={true}
              placeholder="Conferma la password"
              onChange={(el) => {
                setUser({ ...user, passwordConfirm: el.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group row mx-auto fadeIn fifth">
          <label htmlFor="inputNome" className="col-sm-2 col-form-label">
            Nome:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control  registerStyle"
              id="inputNome"
              required={true}
              placeholder="Inserisci il tuo Nome"
              onChange={(el) => {
                setUser({ ...user, nome: el.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group row mx-auto fadeIn sixth">
          <label htmlFor="inputCognome" className="col-sm-2 col-form-label">
            Cognome:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control  registerStyle"
              id="inputCognome"
              required={true}
              placeholder="Inserisci il tuo Cognome"
              onChange={(el) => {
                setUser({ ...user, cognome: el.target.value });
              }}
            />
          </div>
        </div>
        {/*
        <div class="form-group row mx-auto">
          <label for="inputData" class="col-sm-2 col-form-label">
            Data:
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control registerStyle"
              id="inputData"
              required={true}
              placeholder="Seleziona la tua data di nascita"
              onChange={(el) => {
                setUser({ ...user, data: el.target.value });
              }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Telefono:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control registerStyle"
              id="inputPassword"
              required={true}
              placeholder="Inserisci telefono"
              onChange={(el) => {
                setUser({ ...user, telefono: el.target.value });
              }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            via:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control registerStyle"
              id="inputPassword"
              required={true}
              placeholder="Inserisci via"
              onChange={(el) => {
                setUser({ ...user, via: el.target.value });
              }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Paese:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control registerStyle"
              id="inputPassword"
              required={true}
              placeholder="Inserisci paese"
              onChange={(el) => {
                setUser({ ...user, paese: el.target.value });
              }}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Cap:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control registerStyle"
              id="inputPassword"
              required={true}
              placeholder="Inserisci cap"
              onChange={(el) => {
                setUser({ ...user, cao: el.target.value });
              }}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Provincia:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control registerStyle"
              id="inputPassword"
              required={true}
              placeholder="Inserisci cognome"
              onChange={(el) => {
                setUser({ ...user, username: el.target.value });
              }}
            />
          </div>
            </div>*/}
      </form>

      <button
        className={
          "fadeIn fourth btn m-1 " +
          (canIDoRegistration
            ? "sfondo3"
            : darkMode
            ? "nav1button"
            : "nav1buttonl")
        }
        onClick={() => {
          doRegistration();
        }}
      >
        Registrati a Treessue!
      </button>
      <button
        id="togglemodal"
        value="Log In"
        disabled={!canIDoRegistration}
        data-toggle="modal"
        data-target={checkIsAllCompleted ? "#messageDialog" : ""}
        style={{ display: "none" }}
      ></button>
      <p style={{ color: "red" }}>{errorMessage}</p>
      {/*<div>
        <MessageDialog
          ConfirmButtonText={"Accedi"}
          CancelButtonText={""}
          CancelButtonVisible={false}
          titleModal={"Registrazione completata!✔️"}
          text={
            "Benvenuto nella community Treessue!\nL'iscrizione al portale è avvenuta con successo.\n\nProcedi ora al login con le credenziali appena generate."
          }
          onConfirm={() => {}}
        />
        </div>*/}
    </div>
  );
}

export { RegisterCardComponent };
