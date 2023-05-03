import bannerimg from "../img/banner_new.jpeg";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

function HomePages() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className="homePage-structure p-0 ">
        <img src={bannerimg} class="img-fluid" alt="..."></img>
        <button
          type="button"
          className={
            "btn btn-outline-success mx-auto " +
            (darkMode ? "nav2buttonl" : "nav2button")
          }
          style={{ width: "60%" }}
        >
          premi il pulsante!
        </button>
        <p className="mx-auto">Benvenuti nella HomePage!</p>
      </div>
      <div className={(darkMode ? "testolight" : "testodark") + " p-5"}>
        Secondo elemento!
      </div>
    </div>
  );
}

export { HomePages };
