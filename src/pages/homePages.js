import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

function HomePages() {
  const { darkMode } = useContext(DarkModeContext);

  //ottimo pagina prescelta?
  //Cancella poure XD. Yes, a questo punto io proverei

  return (
    <div>
      <div className="homePage-bgimg p-0 homePage-structure " style={{ height: '40vh', display: "flex" }}>
        <div className="homePage-structure d-flex align-content-center flex-wrap justify-content-center" style={{ height: "100%", width: "100%" }}>
          <p className="mx-auto " style={{ width: "900%", textAlign: "center" }}>Benvenuti nella HomePage!</p>
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
        </div>
      </div>

      {/*<img src={bannerimg} class="img-fluid" alt="..."></img>*/}

      <div className={(darkMode ? "testolight" : "testodark") + " p-5"}>
        Secondo elemento!
      </div>



      {/*
<div
  class="bg-image d-flex justify-content-center align-items-center"
  style={{ 
    backgroundImage: "https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp",
    height: "100vh"
  }}
>
  <h1 class="text-white">Page title</h1>
</div>


<div
  class="bg-image"
  style={{
    backgroundImage: "https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp",
    height: "100vh"
  }}

>
  <div class="mask" style={{backgroundColor:(0, 0, 0, 0.6)}}>			rgb
    <div class="d-flex justify-content-center align-items-center h-100">
      <h1 class="text-white mb-0">Page title</h1>
    </div>
  </div>
</div>*/}
    </div>
  );
}

export { HomePages };
