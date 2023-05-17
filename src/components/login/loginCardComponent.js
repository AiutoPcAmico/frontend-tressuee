import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../theme/DarkModeContext";
import { postLogin } from "../../api/indexTreessueApi";

function LoginCardComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [canIDoLogin, setCanIDoLogin] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  async function doLogin() {
    //chiamata API al login

    await postLogin(username, password).then((response) => {
      console.log(response);
      console.log("Ho fatto il login con");
      console.log({ username, password });
    });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    var isUsernameValid = isValidEmail(username);
    console.log(isUsernameValid);
    if (isUsernameValid && username && password) {
      setCanIDoLogin(true);
      console.log("tuttovqalido!");
    } else {
      setCanIDoLogin(false);
    }
  }, [username, password]);

  return (
    <div>
      <div>
        <label
          style={{
            opacity: 0,
            animationTimingFunction: "ease-in",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationPlayState: "running",
            animationName: "fadeIn",
            animationFillMode: "forwards",
            animationDuration: "1s",
          }}
          htmlFor="password"
        >
          Username:
        </label>
        <input
          type="email"
          id="login"
          name="login"
          placeholder="Your email address..."
          className="fadeIn second"
          required={true}
          onChange={(el) => {
            console.log("username " + el.target.value);
            setUsername(el.target.value);
          }}
          style={{
            opacity: 0,
            animationTimingFunction: "ease-in",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationPlayState: "running",
            animationName: "fadeIn",
            animationFillMode: "forwards",
            animationDuration: "1s",
            backgroundColor: " rgb(246, 246, 246)",
            color: "rgb(13, 13, 13)",
            paddingTop: "15px",
            paddingRight: "32px",
            paddingBottom: "15px",
            paddingLeft: "32px",
            textAlign: "center",
            textDecorationLine: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "5px",
            width: "85%",
            border: "2px solid rgb(246, 246, 246)",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in-out",
            transitionDelay: "0s",
            transitionProperty: "all",
            borderRadius: "5px",
            animationDelay: "0.6s",
          }}
        />

        <label
          style={{
            opacity: 0,
            animationTimingFunction: "ease-in",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationPlayState: "running",
            animationName: "fadeIn",
            animationFillMode: "forwards",
            animationDuration: "1s",
          }}
          htmlFor="password"
        >
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your Password..."
          className="fadeIn third"
          required={true}
          onChange={(el) => {
            console.log("passwoed " + el.target.value);
            setPassword(el.target.value);
          }}
          style={{
            opacity: 0,
            animationTimingFunction: "ease-in",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationPlayState: "running",
            animationName: "fadeIn",
            animationFillMode: "forwards",
            animationDuration: "1s",
            backgroundColor: "rgb(246, 246, 246)",
            color: "rgb(13, 13, 13)",
            paddingTop: "15px",
            paddingRight: "32px",
            paddingBottom: "15px",
            paddingLeft: "32px",
            textAlign: "center",
            textDecorationLine: 2,
            textDecorationThickness: "initial",
            textDecorationStyle: "initial",
            textDecorationColor: "initial",
            display: "inline-block",
            fontSize: "16px",
            margin: "5px",
            width: "85%",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "rgb(246, 246, 246)",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in-out",
            transitionDelay: "0s",
            transitionProperty: "all",
            borderRadius: "5px",
            animationDelay: "0.8s",
          }}
        />
        <button
          value="Log In"
          className={
            "fadeIn fourth btn btn-success m-1 " +
            (canIDoLogin ? "sfondo3" : darkMode ? "nav1button" : "nav1buttonl")
          }
          onClick={() => {
            doLogin();
          }}
        >
          Effettua il Login
        </button>
      </div>
    </div>
  );
}

export { LoginCardComponent };
