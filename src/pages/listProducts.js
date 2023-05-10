import { useEffect, useState } from "react";
import CardProdotto from "../components/cardProdotto.js";
import base_images from "../img/base_image_temp.json";

function ListProducts() {
  const [listProduct, setListProduct] = useState([]);

  async function retrieveInfo() {
    var array = [];
    //await della chiamata axios
    array = [
      {
        id: 1,
        name: "Fazzoletti 10",
        category: "fazzoletti",
        description: "Una descrizione per fazzoletti da 10",
        unitPrice: 10,
        isActive: true,
        image: base_images.fazzoletti,
      },
      {
        id: 2,
        name: "Fazzoletti 200",
        category: "fazzoletti",
        description: "Pacchetto da 200",
        unitPrice: 30,
        isActive: true,
        image: base_images.fazzoletti,
      },
      {
        id: 3,
        name: "Torre ricarica",
        category: "ricaricatore",
        description: "Una bellissima torre da ricarica",
        unitPrice: 89.2,
        isActive: true,
        image: base_images.ricaricatore,
      },
      {
        id: 4,
        name: "scatoletta",
        category: "scatoletta",
        description:
          "Una bellissima scatoletta per contenere i tuoi fazzoletti!",
        unitPrice: 21.2,
        isActive: true,
        image: base_images.scatolina,
      },
    ];
    return array;
  }

  useEffect(() => {
    retrieveInfo().then((element) => {
      setListProduct(element);
    });
  }, []);

  return (
    <div>
      <div className="sfondo1 mt-2">lista dei filtri!</div>
      <div className="d-flex flex-wrap justify-content-center">
        {listProduct.map((p, i) => {
          return (
            <CardProdotto
              singleProduct={p}
              indice={i}
              key={p.id}
            ></CardProdotto>
          );
        })}
      </div>
    </div>
  );
}

export { ListProducts };
