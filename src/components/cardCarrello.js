import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";
import QuantitySelector from "./quantitySelector";
import { removeItem } from "../stores/cartOperations";
import { useDispatch } from "react-redux";

function CardCarrello({ product, quantity }) {
  const { darkMode } = useContext(DarkModeContext);
  const dispatch = useDispatch();

  console.log(product);

  function getImage() {
    const picture = product.image;
    return picture;
  }

  return (
    <div
      className={"card mb-3 " + (darkMode ? "sfondocard2" : "sfondocard1")}
      style={{ width: "100%" }}
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={getImage()}
            className="card-img-top mx-auto mt-1"
            alt={`${product.category} icon`}
            style={{ width: "150px" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">
              Prezzo Unitario: {product.unitPrice.toFixed(2)} €
            </p>
            <p class="card-text">
              {/*Quantità: {quantity}*/}
              <QuantitySelector
                initialQuantity={quantity}
                setUpperQuantity={() => {}}
                prodQuantity={product.quantity}
              ></QuantitySelector>
              <button
                type="button"
                className="btn btn-warning ml-1"
                onClick={() => {
                  dispatch(removeItem({ id: product.id }));
                }}
              >
                <i class="bi bi-trash3"></i>
              </button>
            </p>
            <p class="card-text">
              Totale Parziale: {(product.unitPrice * quantity).toFixed(2)} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarrello;
