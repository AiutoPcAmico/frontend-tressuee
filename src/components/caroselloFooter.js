import scatola from "../img/scatoletta.png";
import torre from "../img/ricaricatore.png";
import fazzoletti from "../img/fazzoletti.png";
import intero from "../img/intero.png";
import { DarkModeContext } from "../theme/DarkModeContext";
import "./components.css";
import { useContext } from "react";

function CaroselloFooter() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="carouselExampleCaptions"
      class={"carousel slide " + (darkMode ? "sfondo1" : "sfondo2")}
      data-ride="carousel"
      style={{ marginTop: "2em" }}
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h4 style={{ textAlign: "center" }}>La Scatola</h4>

          <img src={scatola} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p className="testodark">
              La scatola è eco-friendly e ricaricabile! Mantiene i fazzoletti al
              riparo dall'acqua e ne evita lo stropicciamento. E' senza
              linguetta e completamente customizzabile.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <h4 style={{ textAlign: "center" }}>La torre</h4>
          <img src={torre} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p className="testodark">
              Le torri servono per ricaricare la scatola. La torre 'domestica' è
              pratica e compatta, ha un cestello che contiene 100 fazzoletti.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <h4 style={{ textAlign: "center" }}>L'intero set!</h4>
          <img src={intero} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p className="testodark">
              Saranno presenti torri in luoghi pubblici, per non rimanere mai a
              corto di fazzoletti (disponibili sulla mappa del sito).
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <h4 style={{ textAlign: "center" }}>I miei fazzoletti!</h4>
          <img src={fazzoletti} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p className="testodark">
              I nostri fazzoletti hanno 4 veli, sono fatti completamente da
              materiale riciclato e sono profumatissimi!
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
}

export default CaroselloFooter;
