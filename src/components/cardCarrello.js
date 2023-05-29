import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useState, useEffect } from "react";
import QuantitySelector from "./quantitySelector";
import { removeItem, updateItem } from "../stores/cartOperations";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantityCart, deleteFromCart } from "../api/indexTreessueApi";

function CardCarrello({ product, quantity }) {
  const { darkMode } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  const access = useSelector((state) => state.sessionInfo?.sessionToken);
  const [image, setImage] = useState();

  useEffect(() => {
    try {
      setImage(require(`../img/${product?.image}`));
    } catch (error) {}
  }, [product.image]);

  function changeQuanityFromSelector(value) {
    if (quantity !== value) {
      if (access) {
        //se loggato lo salvo sia in locale che tramite api nel DB
        changeQuantityCart(product.id_product, quantity).then((element) => {
          if (element.isError) {
            console.error(
              "Errore durante la sincronizzazione delle quantità col DB"
            );
            dispatch(
              updateItem({
                id: product.id_product,
                quantity: value,
              })
            );
          } else {
            dispatch(
              updateItem({
                id: product.id_product,
                quantity: value,
              })
            );
            document.getElementById("buttonModal").click();
          }
        });
      } else {
        //dispatch(updateItem({ id: product.id, quantity: value }));
        dispatch(updateItem({ id: product.id_product, quantity: value }));
      }
    }
  }

  return (
    <div
      className={"card mb-3 " + (darkMode ? "sfondocard1" : "sfondocard3")}
      style={{ width: "100%" }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={image}
            className="card-img-top mx-auto mt-1"
            alt={`${product.category} icon`}
            style={{ width: "150px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.prod_name}</h5>
            <p className="card-text">
              {/*Prezzo Unitario: {product.unitPrice.toFixed(2)} €*/}
              Prezzo Unitario: {product.unit_price.toFixed(2)} €
            </p>
            <div className="card-text">
              <QuantitySelector
                initialQuantity={quantity}
                setUpperQuantity={(value) => {
                  changeQuanityFromSelector(value);
                }}
                prodQuantity={product.available_quantity}
              ></QuantitySelector>

              <button
                type="button"
                className="btn btn-warning ml-1"
                onClick={() => {
                  if (access) {
                    //se loggato lo salvo sia in locale che tramite api nel DB
                    deleteFromCart(product.id_product).then((element) => {
                      if (element.isError) {
                        //setError(element.messageError);
                      } else {
                        dispatch(removeItem({ id: product.id_product }));
                        document.getElementById("buttonModal").click();
                      }
                    });
                  } else {
                    //dispatch(removeItem({ id: product.id }));
                    dispatch(removeItem({ id: product.id_product }));
                  }
                }}
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
            <p className="card-text">
              {/*Totale Parziale: {(product.unitPrice * quantity).toFixed(2)} €*/}
              Totale Parziale: {(product.unit_price * quantity).toFixed(2)} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarrello;
