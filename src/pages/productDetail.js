import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../stores/cartOperations";
import QuantitySelector from "../components/quantitySelector";
import { MessageDialog } from "../components/messageDialog";
import { retrieveSingleProduct, saveIntoCart } from "../api/indexTreessueApi";
import { useWindowDimensions } from "../utils/useWindowDimensions";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const divref = useRef();
  const [quantity, setQuantity] = useState(1);
  const { wi } = useWindowDimensions();
  const [heightText, setHeightText] = useState({
    text: 0,
    block: 0,
    scroll: 0,
  });
  const [error, setError] = useState(
    "Caricamento in corso dei dati,\nAttendere prego"
  );
  const [product, setProduct] = useState({
    id_product: null,
    prod_name: "",
    category: "",
    description: "",
    unit_price: null,
    is_available: true,
    available_quantity: 0,
    image: "",
  });
  const idOfProduct = parseInt(params.id);
  const access = useSelector((state) => state.sessionInfo?.sessionToken);
  const [image, setImage] = useState();

  useEffect(() => {
    try {
      setImage(require(`../img/${product.image}`));
    } catch (error) {}
  }, [product.image]);

  useEffect(() => {
    retrieveSingleProduct(idOfProduct).then((element) => {
      if (element.isError) {
        setError(element.messageError);
      } else {
        setError("");
        setProduct(element.data);
        getListSize();
      }
    });
  }, [idOfProduct]);

  useEffect(() => {
    window.addEventListener("resize", getListSize);
    window.addEventListener("scroll", getListSize);
  }, []);

  const getListSize = () => {
    const heightText = document.getElementById("scrollableText")?.scrollHeight
      ? document.getElementById("scrollableText").scrollHeight
      : 1;
    const offsetMax = document.getElementById("scrollableText")?.offsetHeight
      ? document.getElementById("scrollableText")?.offsetHeight
      : 1;
    const prova = document.getElementById("scrollableText")?.scrollTop
      ? document.getElementById("scrollableText")?.scrollTop
      : 1;

    setHeightText({ text: heightText, block: offsetMax, scroll: prova });

    //console.log(prova);
  };

  function addToCart(idproduct, quantity) {
    console.log({ idproduct, quantity, access });

    if (access) {
      //se loggato lo salvo sia in locale che tramite api nel DB
      saveIntoCart(idproduct, quantity).then((element) => {
        if (element.isError) {
          setError(element.messageError);
        } else {
          setError("");
          dispatch(addItem({ id: idproduct, quantity: quantity }));
          document.getElementById("buttonModal").click();
        }
      });
    } else {
      //non loggato, lo salvo solo in locale
      dispatch(addItem({ id: idproduct, quantity: quantity }));
      document.getElementById("buttonModal").click();
    }
  }

  return (
    <div>
      {error === "" && (
        <div className="detailsPage">
          <MessageDialog
            titleModal={"Prodotto aggiunto!"}
            CancelButtonText={"Torna ai dettagli"}
            CancelButtonVisible={true}
            ConfirmButtonText={"Vai al Carrello"}
            text={
              "Il prodotto selezionato è stato aggiunto correttamente al carrello!\nVuoi continuare lo shopping o andare direttamente al carrello?"
            }
            onConfirm={() => {
              navigate("/cart");
            }}
          ></MessageDialog>

          <h2 className={darkMode ? "testolight" : "testodark"}>
            {/*product.name*/}
            {product.prod_name}
            {/*height*/}
          </h2>
          <div className=" text flex-column" style={{}}>
            <div className="row flex-wrap align-items-center pb-3">
              <div
                style={{ width: "32%" }}
                className={
                  "col-sm-4 col-12 text-center " +
                  (darkMode ? "sfondo3" : "sfondo1")
                }
              >
                <img
                  className="m-2"
                  src={image}
                  alt={product.category + " logo"}
                  style={{ maxWidth: "100%" }}
                ></img>
              </div>
              <div
                ref={divref}
                onScroll={getListSize}
                id="scrollableText"
                className={
                  "col-sm-4 col-12 " +
                  (darkMode ? "testolight" : "testodark") +
                  " " +
                  (wi < 576
                    ? ""
                    : heightText.text > heightText.block
                    ? heightText.scroll !== 1 &&
                      heightText.scroll !== 0 &&
                      heightText.text - heightText.block >
                        Math.floor(heightText.scroll) + 1
                      ? darkMode
                        ? "inner-shadow-light"
                        : "inner-shadow-dark"
                      : ""
                    : "") +
                  " " +
                  (wi < 576
                    ? ""
                    : heightText.text > heightText.block
                    ? heightText.scroll === 1 || heightText.scroll === 0
                      ? darkMode
                        ? "inner-shadow-lightb"
                        : "inner-shadow-darkb"
                      : ""
                    : "") +
                  " " +
                  (wi < 576
                    ? ""
                    : heightText.text > heightText.block
                    ? heightText.scroll !== 1 &&
                      heightText.scroll !== 0 &&
                      heightText.text - heightText.block >
                        Math.floor(heightText.scroll) - 1
                      ? darkMode
                        ? "inner-shadow-lightt"
                        : "inner-shadow-darkt"
                      : ""
                    : "")
                }
                style={{ width: "32%", overflowY: "scroll", maxHeight: "60vh" }}
              >
                <div>
                  <p style={{ fontSize: "25px", textAlign: "right" }}>
                    prezzo unitario{" "}
                    {/*(Math.round(product.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                    {/*€*/}
                    {(Math.round(product.unit_price * 100) / 100).toFixed(2)} €
                  </p>
                  <p id="testo">{product.description}</p>
                </div>
              </div>
              <div
                className={
                  "col-sm-4 col-12 align-self-start text-center sfondo2 " +
                  (darkMode ? "testolight" : "testodark")
                }
                style={{ width: "32%" }}
              >
                <p style={{ fontSize: "25px", textAlign: "right" }}>
                  Totale{" "}
                  {/*(
                  (Math.round(product.unitPrice * 100) * quantity) /
                  100
                ).toFixed(2)*/}
                  {/*€*/}
                  {(
                    (Math.round(product.unit_price * 100) * quantity) /
                    100
                  ).toFixed(2)}
                  €
                </p>

                <div>
                  <QuantitySelector
                    initialQuantity={1}
                    setUpperQuantity={setQuantity}
                    prodQuantity={product.available_quantity}
                  ></QuantitySelector>
                </div>

                <p>
                  <button
                    type="button"
                    className={
                      "btn btn-outline-success " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                    }
                    onClick={() => {
                      //dispatch(addItem({ id: product.id, quantity: quantity }));
                      addToCart(product.id_product, quantity);
                    }}
                  >
                    aggiungi al Carrello
                  </button>
                  <button
                    id="buttonModal"
                    style={{ display: "none" }}
                    type="button"
                    data-toggle="modal"
                    data-target="#messageDialog"
                  ></button>
                  <button
                    type="button"
                    className={
                      "btn btn-outline-success ml-3 " +
                      (darkMode ? "nav2buttonl" : "nav2button")
                    }
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Vai al Carrello
                  </button>
                </p>

                <div style={{ textAlign: "left" }}>
                  <p>
                    <b>Quantità in deposito: </b> {product.available_quantity}
                  </p>
                  <p>
                    <b>Spedizione:</b> Ancora per poco gratuita!
                  </p>
                  <p>
                    <b>Categoria:</b> {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}

export { ProductDetail };
