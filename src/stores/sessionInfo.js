import { createSlice } from "@reduxjs/toolkit";

export const sessionInfo = createSlice({
  name: "sessionInfo",
  initialState: {
    user: {},
    sessionToken: null,
  },
  reducers: {
    setSessionToken: (state, actions) => {
      //check if i have already the item in the array
      console.log(actions.payload.sessionToken);
      state.sessionToken = actions.payload.sessionToken;
    },

    setSessionUser: (state, actions) => {
      var modifiedUser = JSON.parse(JSON.stringify(actions.payload.user));

      delete modifiedUser.password;
      if (modifiedUser.telefono === "") delete modifiedUser.telefono;
      if (modifiedUser.indirizzo === "") delete modifiedUser.indirizzo;
      if (modifiedUser.data === "") delete modifiedUser.data;
      if (modifiedUser.cap === "") delete modifiedUser.cap;
      if (modifiedUser.citta === "") delete modifiedUser.citta;
      if (modifiedUser.provincia === "") delete modifiedUser.provincia;

      state.user = modifiedUser;
      console.log({ actions });
    },

    destroySession: (state, actions) => {
      console.log("session destroyed");
      state.user = {};
      state.sessionToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSessionToken, setSessionUser, destroySession } =
  sessionInfo.actions;

export default sessionInfo.reducer;
