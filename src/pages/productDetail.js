import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../theme/DarkModeContext";
import baseImages from "../img/base_image_temp.json";

function ProductDetail() {
  const params = useParams();
  const { darkMode } = useContext(DarkModeContext);
  const [height, setHeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    id: null,
    name: "",
    category: "",
    description: "",
    unitPrice: null,
    isActive: true,
    quantity: 1,
    foto: "",
    //pezzi magazzino
  });
  const idOfProduct = parseInt(params.id);

  useEffect(() => {
    setHeight(document.getElementById("testo").clientHeight);
  }, []);

  //gestisce l'on blur nel caso di testo vuoto!
  const cambiaquantita = (event) => {
    console.log(event.target.value);
    event.target.value = event.target.value * 1;

    if (isNaN(event.target.value)) {
      event.target.value = 1;
      console.log("NON numero");
    }
    if (event.target.value < 1) {
      event.target.value = 1;
    }
    event.target.value = +event.target.value;

    //setQuantity(event.target.value * 1);
    changeQuantity(event.target.value, true);
  };

  //gestisce tutti gli altri casi!
  function changeQuantity(many, manual) {
    //if (many === "");

    if (many !== "") {
      var pippo = many * 1;

      if (pippo < 1) setQuantity(1);
      if (pippo > quantity) setQuantity(product.quantity);

      if (pippo >= 1 && pippo <= product.quantity) setQuantity(pippo);
    } else {
      setQuantity("");
    }
  }

  async function retrieveDetailsOfProduct(idProd) {
    var array = [];
    //await della chiamata axios
    array = [
      {
        id: 1,
        name: "Fazzoletti 10",
        category: "fazzoletti",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ultrices elit. Aenean interdum, tortor non maximus efficitur, urna leo ultricies ante, at viverra nunc lorem a lacus. Nam ac pulvinar diam. Nulla tempor erat dictum, ultrices magna eget, sodales nibh. Aenean eu hendrerit mauris, sed suscipit justo. Integer euismod laoreet lorem sed rutrum. In hac habitasse platea dictumst. Fusce nec diam eleifend, ultrices massa et, laoreet urna. Praesent fringilla, ex nec varius tincidunt, enim magna dapibus orci, fermentum scelerisque urna tellus non nulla. Aliquam interdum finibus mollis.\nFusce pretium nulla vel viverra accumsan. Mauris a mi pharetra, consequat magna ac, laoreet mauris. Mauris at consectetur nunc. Proin sit amet ligula suscipit, lacinia mauris at, euismod mi. Donec vestibulum mi non consectetur tempor. Aenean mattis lacus vel lorem posuere placerat. Maecenas quis ligula quis lacus convallis pellentesque non eget leo. Ut maximus eros diam, a venenatis ligula congue nec. Nulla risus ante, viverra in massa ac, congue fermentum est. Sed quis commodo risus, ac molestie augue. Phasellus auctor justo ipsum, ut volutpat enim condimentum sed. Ut finibus enim a sapien porttitor, nec lacinia nisi ornare. In non risus libero. Maecenas mollis congue mauris eu ultricies.\nSed quis sagittis odio. Nunc ullamcorper nulla nunc, vel imperdiet lorem tempus eget. Quisque mattis imperdiet commodo. Cras aliquam dolor non purus sodales faucibus. Curabitur eget dapibus enim. Praesent lacinia libero turpis, quis tincidunt risus viverra id. Pellentesque sapien orci, efficitur vel turpis quis, porttitor pretium lacus. Suspendisse feugiat turpis nec purus faucibus efficitur. Nullam vel sodales erat. Morbi molestie, elit a maximus congue, libero augue vestibulum erat, id condimentum odio enim et nibh. Vestibulum lacinia odio odio, quis ultrices lacus luctus posuere. Morbi luctus ante a mollis varius. In tristique lacinia facilisis. Aliquam venenatis tortor vel maximus imperdiet. Mauris sem magna, sollicitudin ut finibus sit amet, aliquet ac ipsum.\nSuspendisse et sem velit. Maecenas quam libero, cursus et efficitur iaculis, consectetur sit amet leo. Ut fermentum volutpat lobortis. Mauris non neque eget nisl posuere commodo id in ligula. Nunc sed fermentum quam. Cras aliquam porta laoreet. Cras eget eleifend purus. In malesuada laoreet purus et mollis. Nullam sagittis consectetur pharetra. Cras eu euismod massa. Integer auctor velit massa, vitae bibendum quam pharetra sed. Donec nec massa tortor. Pellentesque euismod libero ac est mollis, et commodo sapien imperdiet. Praesent ac convallis elit, ut imperdiet purus. Donec felis enim, lacinia vel porta dictum, convallis ut velit. Maecenas eu varius orci, in tempor ipsum.\nMorbi eget quam et felis ullamcorper cursus. Vivamus ipsum nibh, viverra et est ut, placerat dignissim quam. Vestibulum varius justo vitae fermentum rhoncus. Aliquam tincidunt nibh leo, accumsan fringilla nibh condimentum ac. Aliquam ac pulvinar libero. Cras purus dui, finibus nec egestas in, malesuada vel nibh. Curabitur facilisis lacus pellentesque eros dictum eleifend. Cras molestie ornare lectus quis feugiat. Nunc convallis euismod felis iaculis pharetra. Etiam a ligula condimentum ipsum tristique sollicitudin. Phasellus egestas nulla nec quam sagittis dictum. Aliquam erat volutpat. Pellentesque suscipit ligula dapibus turpis iaculis, porttitor vehicula lectus fringilla. Aenean dignissim, arcu vitae convallis ultrices, sapien est mollis diam, vitae facilisis eros felis sed mi.",
        unitPrice: 10,
        isActive: true,
        quantity: 23,
        foto: baseImages.fazzoletti,
      },
      {
        id: 2,
        name: "Fazzoletti 200",
        category: "fazzoletti",
        description: "Pacchetto da 200",
        unitPrice: 30,
        isActive: true,
        quantity: 10,
        foto: baseImages.fazzoletti,
      },
      {
        id: 3,
        name: "Torre ricarica",
        category: "ricaricatore",
        description: "Una bellissima torre da ricarica",
        unitPrice: 89.2,
        isActive: true,
        quantity: 60,
        foto: baseImages.ricaricatore,
      },
      {
        id: 4,
        name: "scatoletta",
        category: "scatoletta",
        description:
          "Una bellissima scatoletta per contenere i tuoi fazzoletti!",
        unitPrice: 21.2,
        isActive: true,
        quantity: 1,
        foto: baseImages.scatolina,
      },
    ];

    // await chiamata api
    const result = array.find((element) => {
      return element.id === idOfProduct;
    });

    return result;
  }

  useEffect(() => {
    retrieveDetailsOfProduct(idOfProduct).then((found) => {
      setProduct(found);
    });
  }, [idOfProduct]);

  return (
    <div>
      <div className="detailsPage">
        <h2 className={darkMode ? "testolight" : "testodark"}>
          {product.name}
          {height}
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
                src={product.foto}
                alt="Treessue logo"
                style={{ maxWidth: "100%" }}
              ></img>
            </div>
            <div
              id="scrollableText"
              className={
                "col-sm-4 col-12 " + (darkMode ? "testolight" : "testodark")
              }
              style={{ width: "32%", overflowY: "scroll", maxHeight: "60vh" }}
            >
              <div>
                <p style={{ fontSize: "25px", textAlign: "right" }}>
                  prezzo unitario{" "}
                  {(Math.round(product.unitPrice * 100) / 100).toFixed(2)} €
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
                {(Math.round(product.unitPrice * 100) / 100).toFixed(2)} €
              </p>

              <p>
                <div className="input-group mb-3 justify-content-center">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-danger"
                      type="button"
                      id="button-addon1"
                      onClick={() => {
                        changeQuantity(quantity - 1, false);
                      }}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                  </div>
                  <input
                    type="number"
                    className="form-control text-center"
                    placeholder="Quantity..."
                    aria-describedby="button-addon1"
                    value={quantity}
                    onChange={(event) => {
                      changeQuantity(event.target.value, true);
                    }}
                    onBlur={(event) => {
                      cambiaquantita(event);
                    }}
                    style={{ width: "100px", flex: "none" }}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-info"
                      type="button"
                      id="button-addon2"
                      onClick={() => {
                        changeQuantity(quantity + 1, false);
                      }}
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </p>

              <p>
                <button
                  type="button"
                  className={
                    "btn btn-outline-success " +
                    (darkMode ? "nav2buttonl" : "nav2button")
                  }
                >
                  aggiungi al carrello
                </button>
              </p>

              <div style={{ textAlign: "left" }}>
                <p>
                  <b>Quantità in deposito: </b> {product.quantity}
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
    </div>
  );
}

export { ProductDetail };
