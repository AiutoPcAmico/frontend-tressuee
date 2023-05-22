import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";
import DialogOrderDetail from "./dialogOrderDetail";

function CardOrders({ order }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div
        className={"card mb-3 " + (darkMode ? "sfondocard1" : "sfondocard3")}
        style={{ width: "100%" }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <div className="d-flex flex-wrap justify-content-center row m-0">
          <div
            className={"card col-sm-4 col-md-3 col-lg-2 p-0 innercardorders"}
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-6">{"Codice"}</p>
              <p className="card-text col-lg-6">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.id_order}
              </p>
            </div>
          </div>
          <div
            className={
              "card col-sm-4 col-md-3 col-lg-3 col-xl-2 p-0 innercardorders"
            }
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-6">{"Corriere"}</p>
              <p className="card-text col-lg-6">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.courier_name}
              </p>
            </div>
          </div>
          <div
            className={"card col-sm-4 col-md-3 col-lg-2 p-0 innercardorders"}
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-5">{"Stato"}</p>
              <p className="card-text col-lg-7">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.order_status}
              </p>
            </div>
          </div>
          <div
            className={
              "card col-sm-4 col-md-3 col-lg-3 col-xl-2 p-0 innercardorders"
            }
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-6">{"Consegna stimata"}</p>
              <p className="card-text col-lg-6">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.expected_delivery_date}
              </p>
            </div>
          </div>
          <div
            className={"card col-sm-4 col-md-3 col-lg-2 p-0 innercardorders"}
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-7">{"Tracking"}</p>
              <p className="card-text col-lg-5">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.tracking_code}
              </p>
            </div>
          </div>
          <div
            className={"card col-sm-4 col-md-3 col-lg-2 p-0 innercardorders"}
          >
            <div className="card-body p-1 row">
              <p className="card-title col-lg-6">{"Totale"}</p>
              <p className="card-text col-lg-6">
                {/*(Math.round(singleProduct.unitPrice * 100) / 100).toFixed(2)*/}{" "}
                {order.price} {" €"}
              </p>
            </div>
          </div>
        </div>
        {/*immagine + dati 
      <div className="m-2" style={{ width: "100%" }}>
        <div className=" text flex-column" style={{}}>
          <div className="row flex-wrap align-items-center pb-3">
            <div
              className="form-group row col-12"
              style={{ backgroundColor: "gray" }}
            >
              <div className="col-12">
                <div
                  className="col-sm-6 col-12"
                  style={{ backgroundColor: "dodgerblue" }}
                >
                  <label
                    htmlFor="telefonoaccount"
                    className=" col-form-label"
                    style={{ backgroundColor: "black" }}
                  >
                    Telefono
                  </label>
                  <div className="" style={{ backgroundColor: "gray" }}>
                    <p id="telefonoaccount">1234567</p>
                  </div>
                </div>
                <div className="col-sm-6" style={{ backgroundColor: "orange" }}>
                  <label
                    htmlFor="telefonoaccount"
                    className=" col-form-label"
                    style={{ backgroundColor: "gray" }}
                  >
                    corr
                  </label>
                  <div className="" style={{ backgroundColor: "dodgerblue" }}>
                    <p id="telefonoaccount">brt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      </div>
      {/*modal */}
      <DialogOrderDetail ordine={order}></DialogOrderDetail>
    </div>
  );
}

export default CardOrders;
