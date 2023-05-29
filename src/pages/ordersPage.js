import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext, useEffect, useState } from "react";
import CardOrders from "../components/cardOrders";
import { retrieveUserOrders } from "../api/indexTreessueApi";

const OrdersPage = ({ totalOrders }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [orders, setOrders] = useState([]); //lista tutti prodotti
  const [error, setError] = useState("Caricamento degli ordini in corso!");

  useEffect(() => {
    retrieveUserOrders().then((element) => {
      console.log(element);
      if (element.isError) {
        setError(element.messageError);
      } else {
        setError("");
        //console.log(element.data);
        setOrders(element.data.result);
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
      <div className="detailsPage">
        <h2 className={darkMode ? "testolight" : "testodark"}>Ordini</h2>
        <div className=" text flex-column" style={{}}>
          <div className="row flex-wrap align-items-center pb-3">
            <div
              className={
                "col-12 text-center pt-3 " + (darkMode ? "sfondo3" : "sfondo1")
              }
            >
              {!(orders.length > 0) && (
                <p className={!darkMode ? "testolight" : "testodark"}>
                  Non hai ancora ordinato nulla
                </p>
              )}
              {orders.length > 0 &&
                orders.map((order) => {
                  /*const order = orders.find(
                    //(singleProd) => singleProd.id === element.productId
                    (singleProd) => {
                      return singleProd.id_product === element.id_product;
                    }
                  );*/

                  return (
                    <CardOrders
                      order={order}
                      //key={element.id}
                      key={order.id_order}
                    ></CardOrders>
                  );
                })}
              {/*!orders.length > 0 && <p>Non hai ancora ordinato nulla</p>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrdersPage };
