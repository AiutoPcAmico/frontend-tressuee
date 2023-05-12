import "../pages/pages.css";
import logo from "../img/logo.png";
import pla from "../img/pla_image.jpg";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

//ciaooo
function AccountPage() {
  const { darkMode } = useContext(DarkModeContext);
  //misto tra carrello e about
  //+ perprod associati listproducts

  return <div className="aboutPage"></div>;
}

export { AccountPage };
