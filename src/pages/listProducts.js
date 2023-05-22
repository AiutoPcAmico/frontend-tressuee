import { useEffect, useState } from "react";
import CardProdotto from "../components/cardProdotto.js";
import { retrieveAllProducts } from "../api/indexTreessueApi.js";

function ListProducts() {
  const [listProduct, setListProduct] = useState(null);
  const [error, setError] = useState("Caricamento in corso,\nAttendere prego!");

  useEffect(() => {
    retrieveAllProducts().then((element) => {
      if (element.isError) {
        setError(element.messageError);
      } else {
        setError("");
        setListProduct(element.data);
        //console.log(element);
      }
    });
  }, []);

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

      <div className="d-flex flex-wrap justify-content-center">
        {listProduct !== null && !(listProduct.length > 0) && (
          <p>al momento prodotti non disponibili</p>
        )}
        {listProduct !== null &&
          listProduct.map((p, i) => {
            return (
              <CardProdotto
                singleProduct={p}
                indice={i}
                key={p.id_product}
                //debug key={p.id}
              ></CardProdotto>
            );
          })}
      </div>
    </div>
  );
}

export { ListProducts };
