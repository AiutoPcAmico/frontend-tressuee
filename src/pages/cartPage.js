import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useEffect, useMemo, useState } from "react";
import CardCarrello from "../components/cardCarrello";
import { useSelector, useDispatch } from "react-redux";
import { retrieveAllProducts, createOrder } from "../api/indexTreessueApi";
import { deleteCart } from "../stores/cartOperations";

const CartPage = ({ totalProducts }) => {
  const { darkMode } = useContext(DarkModeContext);
  const cart = useSelector((state) => state.cart.listCart); //prodoti nel carrello
  const [products, setProducts] = useState([]); //lista tutti prodotti
  const [error, setError] = useState("Caricamento dei dati in corso!");
  const [msgOrder, setMsgOrder] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllProducts().then((element) => {
      //console.log(element);
      if (element.isError) {
        setError(element.messageError);
      } else {
        setError("");
        setProducts(element.data);
      }
    });
  }, []);

  const totalNumberOfProduct = useMemo(() => {
    var many = 0;
    cart.forEach((element) => {
      console.log({ element });
      many = many + element.quantity;
    });
    return many;
  }, [cart]);

  const totalPrice = useMemo(() => {
    if (products.length === 0) return 0;

    var price = 0;
    cart.forEach((element) => {
      const product = products.find((singleProd) => {
        return singleProd.id_product === element.id_product;
      });

      price = price + product.unit_price * element.quantity;
    });

    return price;
  }, [cart, products]);

  function doShop() {
    createOrder().then((element) => {
      if (element.isError) {
        setError(element.messageError);
      } else {
        setError("");
        setProducts(element.data);
        dispatch(deleteCart());
        setMsgOrder(true);
      }
    });
  }

  return (
    <div>
      {error !== "" && (
        <div
          className="alert alert-danger mx-auto mt-4"
          role="alert"
          style={{ width: "300px", textAlign: "center" }}
        >
          <b>Attenzione!</b>
          <p>{error}</p>
        </div>
      )}
      <div className="detailsPage">
        <h2 className={darkMode ? "testolight" : "testodark"}>Carrello</h2>
        <div className=" text flex-column" style={{}}>
          <div className="row flex-wrap align-items-center pb-3">
            <div
              style={{ width: "49%" }}
              className={
                "col-sm-6 col-12 text-center pt-3 " +
                (darkMode ? "sfondo3" : "sfondo1")
              }
            >
              {!(cart.length > 0) && (
                <p className={!darkMode ? "testolight" : "testodark"}>
                  Carrello vuoto
                </p>
              )}
              {products.length > 0 &&
                cart.map((element) => {
                  const product = products.find(
                    //(singleProd) => singleProd.id === element.productId
                    (singleProd) => {
                      return singleProd.id_product === element.id_product;
                    }
                  );

                  return (
                    <CardCarrello
                      product={product}
                      quantity={element.quantity}
                      //key={element.id}
                      key={element.id_product}
                    ></CardCarrello>
                  );
                })}
              {!products.length > 0 && <p>Il carrello è vuoto!</p>}
            </div>
            <div
              style={{ width: "49%" }}
              className={
                "col-sm-6 col-12 align-self-start text-center sfondo2 " +
                (darkMode ? "testolight" : "testodark")
              }
            >
              <p style={{ fontSize: "25px", textAlign: "right" }}>
                Totale {totalPrice.toFixed(2)}€
              </p>

              <div style={{ textAlign: "left" }}>
                <p>
                  <b>{totalNumberOfProduct} articoli </b>
                </p>
                <p>
                  <b>Spedizione:</b> Ancora per poco gratuita!
                </p>
                <p>
                  <b>€</b>
                </p>
              </div>
              <p>
                <button
                  onClick={doShop}
                  disabled={!cart.length > 0}
                  type="button"
                  className={
                    "btn btn-outline-success " +
                    (darkMode ? "nav2buttonl" : "nav2button")
                  }
                >
                  Acquista
                </button>
              </p>

              {msgOrder && (
                <div className="alert alert-success" role="alert">
                  Ordine eseguito correttamente!<br></br>Riceverà presto una
                  email con tutte le indicazioni circa il metodo di pagamento.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartPage };
