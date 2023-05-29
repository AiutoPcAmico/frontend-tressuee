import { createSlice } from "@reduxjs/toolkit";
import { cartUpdateOnLogin } from "../api/indexTreessueApi";

export const cartOperations = createSlice({
  name: "cart",
  initialState: {
    listCart: [],
  },
  reducers: {
    addItem: (state, actions) => {
      //check if i have already the item in the array
      console.log(state.listCart);
      console.log(actions.payload);
      const index = state.listCart.findIndex((el) => {
        //return el.productId === actions.payload.id;
        return el.id_product === actions.payload.id;
      });

      console.log(state.listCart);
      if (index > -1) {
        //se è già presente, ne aggiorno la quantità
        state.listCart[index].quantity =
          state.listCart[index].quantity + actions.payload.quantity;
        console.log("prodotto già presente, aggiorno");
      } else {
        console.log("prodotto non presente, lo aggiungo!");
        state.listCart.push({
          //productId: actions.payload.id,
          id_product: actions.payload.id,
          quantity: actions.payload.quantity,
        });
      }
    },

    updateItem: (state, actions) => {
      const objIndex = state.listCart.findIndex(
        (obj) => obj.id_product === actions.payload.id
      );

      state.listCart[objIndex].quantity = actions.payload.quantity;
      console.log("quantità aggiornata!");
    },
    removeItem: (state, actions) => {
      const index = state.listCart.findIndex(
        (el) => el.id_product === actions.payload.id
      );
      console.log(index);
      if (index > -1) {
        // only splice array when item is found
        state.listCart.splice(index, 1); // 2nd parameter means remove one item only
      }
    },

    deleteCart: (state, actions) => {
      state.listCart = [];
      console.log("Carrello svuotato!");
    },

    alignCart: (state, actions) => {
      //function called to align backend cart to stored cart
      cartUpdateOnLogin().then((response) => {
        if (!response.isError) {
          console.log("Carrello sincronizzato con successo!");
          console.log(response.data);
          state.listCart = response.data;
        } else {
          console.error(
            "Non è stato possibile sincronizzare il carrello. Errore:"
          );
          console.error(response.messageError);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, updateItem, removeItem, deleteCart, alignCart } =
  cartOperations.actions;

export default cartOperations.reducer;
