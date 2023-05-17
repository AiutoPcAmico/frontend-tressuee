import axios from "./axios.js";

const postLogin = async (username, password) => {
  const base64encodedData = btoa(`${username}:${password}`);

  try {
    const data = await axios.post("/user-login/login", undefined, {
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
        Authorization: "Basic " + base64encodedData,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const registerUser = async (username, name, surname, password) => {
  console.log({ username, name, surname, password });
  try {
    const data = await axios.post("/user-registration/registerCustomer", {
      username: username,
      name: name,
      surname: surname,
      password: password,
    });
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export { postLogin, registerUser };
