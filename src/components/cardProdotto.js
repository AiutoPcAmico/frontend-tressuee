import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

function CardProdotto({ singleProduct, indice }) {
  const { darkMode } = useContext(DarkModeContext);

  function getImage() {
    const picture = require(`../img/${singleProduct.category}.png`); // this is sync
    return picture;
  }

  function navigateToDetails(id) {
    console.log("navigooo " + id);
  }

  return (
    <div
      className={
        "card m-2 " +
        (indice % 2 === 0
          ? darkMode
            ? "sfondocard1"
            : "sfondocard2"
          : darkMode
          ? "sfondocard2"
          : "sfondocard1")
      }
      style={{ width: "18rem" }}
      onClick={() => {
        navigateToDetails(singleProduct.id);
      }}
    >
      <img
        src={getImage()}
        className="card-img-top mx-auto mt-1"
        alt={`${singleProduct.category} icon`}
        style={{ width: "150px" }}
      />

      <div className="card-body">
        <h5 className="card-title">{singleProduct.name}</h5>
        <p className="card-text">
          {(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)} €
        </p>
        <p className="card-text">Affrettati! La spedizione è gratuita!</p>

        <button
          className="btn btn-outline-success nav2button"
          onClick={() => {
            navigateToDetails(singleProduct.id);
          }}
        >
          Visualizza i dettagli!
        </button>
      </div>
    </div>
  );
}

export default CardProdotto;
