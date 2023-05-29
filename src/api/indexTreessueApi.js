import cartOperations from "../stores/cartOperations.js";
import sessionInfo, { destroySession } from "../stores/sessionInfo.js";
import { store } from "../stores/store.js";
import axios from "./axios.js";

function retrieveErrors(statusCode, data) {
  var isError = false;
  var messageError = null;

  switch (statusCode) {
    case 200:
      //request ok
      break;
    case 201:
      //created element
      break;

    case 400:
      //Bad Request
      isError = true;
      messageError =
        "Errore della piattaforma.\nNello specifico, è stata inviata una richiesta non valida.\n\nRiprova";
      break;

    case 401:
      //Unauthorized Access
      isError = true;
      messageError = "La sessione è scaduta.\nPrego, rieffettuare il login.";
      store.dispatch(destroySession());
      break;

    case 403:
      //user not authorizated (or not found)
      isError = true;
      messageError =
        "Username o Password errati, o l'utente non è autorizzato all'accesso.\nRiprova";
      break;

    case 404:
      isError = true;
      messageError =
        "Gli elementi ricercati non sono stati trovati nel nostro sistema.\nRiprova!";
      break;

    case 409:
      isError = true;
      messageError =
        "L'utente indicato risulta già iscritto al portale.\nRiprova!";
      break;

    case 426:
      isError = true;
      messageError =
        "L'account è stato disabilitato.\nContattare il supporto Treessue";
      break;

    case 500:
      isError = true;
      messageError = "Errore del Server.\nRiprova!";
      break;

    default:
      isError = true;
      messageError =
        "Errore sconosciuto.\nContattare l'assistenza e fornire il seguente codice.\n" +
        statusCode;
      break;
  }

  return {
    isError: isError,
    messageError: messageError,
    status: statusCode,
    data: data,
  };
}

const postLogin = async (username, password) => {
  const base64encodedData = btoa(`${username}:${password}`);

  try {
    const response = await axios.post("/user-login/login", undefined, {
      headers: {
        Authorization: "Basic " + base64encodedData,
      },
    });
    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
};

const registerUser = async (username, name, surname, password) => {
  try {
    const response = await axios.post("/user-registration/registerCustomer", {
      email: username,
      first_name: name,
      last_name: surname,
      password: password,
    });
    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
};

async function retrieveAllProducts() {
  try {
    const response = await axios.get("/product/all");

    //todo aggiungere quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function retrieveSingleProduct(id) {
  try {
    const response = await axios.get("/product/id/" + id);

    //todo aggiungere la quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function retrievePublicTowers() {
  try {
    const response = await axios.get("/tower/all/public");

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function retrieveUserOrders() {
  ///order/customerOrderList
  const access = store.getState(sessionInfo).sessionInfo.sessionToken;

  try {
    const response = await axios.get("/order/customerOrderList", {
      headers: {
        Authorization: "Bearer " + access,
      },
    });

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function createOrder() {
  ///order/createOrder
  const access = store.getState(sessionInfo).sessionInfo.sessionToken;
  const cart = store.getState(cartOperations).cart.listCart;

  try {
    const response = await axios.post(
      "/order/createOrder",
      {
        cart: cart,
      },
      {
        headers: {
          Authorization: "Bearer " + access,
        },
      }
    );

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function saveIntoCart(idProduct, quantity) {
  //usata se aggiunto un prodotto al carrello
  //oopure
  //utente non loggato con carrello logga
  //let access = JSON.parse(localStorage.getItem("persist:root"));
  //if (access !== null) access = JSON.parse(access.sessionInfo);

  const access = store.getState(sessionInfo).sessionInfo.sessionToken;

  try {
    const response = await axios.post(
      "/cart-detail/add",
      {
        idProduct: idProduct,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: "Bearer " + access,
        },
      }
    );

    //todo aggiungere la quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function deleteFromCart(idProduct) {
  //usata se aggiunto un prodotto al carrello
  //oopure
  //utente non loggato con carrello logga
  //let access = JSON.parse(localStorage.getItem("persist:root"));
  //if (access !== null) access = JSON.parse(access.sessionInfo);

  const access = store.getState(sessionInfo).sessionInfo.sessionToken;
  try {
    const response = await axios.delete(
      "/cart-detail/delete-item/" + idProduct,
      {
        headers: {
          Authorization: "Bearer " + access,
        },
      }
    );

    //todo aggiungere la quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

async function changeQuantityCart(idProduct, quantity) {
  //usata se aggiunto un prodotto al carrello
  //oopure
  //utente non loggato con carrello logga
  //let access = JSON.parse(localStorage.getItem("persist:root"));
  //if (access !== null) access = JSON.parse(access.sessionInfo);

  const access = store.getState(sessionInfo).sessionInfo.sessionToken;
  try {
    const response = await axios.put(
      "/cart-detail/change-quantity",
      {
        idProduct: idProduct,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: "Bearer " + access,
        },
      }
    );

    //todo aggiungere la quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.status, e.data);
  }
}

async function cartUpdateOnLogin(cart) {
  const access = store.getState(sessionInfo).sessionInfo.sessionToken;

  try {
    const pippo = await axios.post(
      "/cart-detail/add",
      { cart: cart },
      {
        headers: {
          Authorization: "Bearer " + access,
        },
      }
    );

    const response = {
      status: 200,
      data: [{ cart }],
    };

    //todo aggiungere la quantity corretta

    return retrieveErrors(response.status, response.data);
  } catch (e) {
    return retrieveErrors(e.response.status, e.response.data.result);
  }
}

export {
  postLogin,
  registerUser,
  retrieveAllProducts,
  retrieveSingleProduct,
  retrievePublicTowers,
  retrieveUserOrders,
  saveIntoCart,
  createOrder,
  cartUpdateOnLogin,
  deleteFromCart,
  changeQuantityCart,
};
