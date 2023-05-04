
import { NavigationButton } from "../components/navigationButton";
import { SearchBar } from "../components/searchBar";
import "./navbars.css"


function UnderNavBar({ selezionato, setSelezionato }) {

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

        <SearchBar></SearchBar>

        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 header_center">

          <NavigationButton
            buttonText={"Home"}
            goToPage={"/"}
            selezionato={selezionato}
            setSelezionato={setSelezionato}
          />

          <NavigationButton
            buttonText={"Shop"}
            goToPage={"/shop"}
            selezionato={selezionato}
            setSelezionato={setSelezionato}
          />

          <NavigationButton
            buttonText={"Mappa"}
            goToPage={"/maps"}
            selezionato={selezionato}
            setSelezionato={setSelezionato}
          />

          <NavigationButton
            buttonText={"Chi Siamo"}
            goToPage={"/about"}
            selezionato={selezionato}
            setSelezionato={setSelezionato}
          />

          <NavigationButton
            buttonText={"Contatti"}
            goToPage={"/contacts"}
            selezionato={selezionato}
            setSelezionato={setSelezionato}
          />

        </ul>
      </div>
    </nav >
  );
}

export { UnderNavBar };
