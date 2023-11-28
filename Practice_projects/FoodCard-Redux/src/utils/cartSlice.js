// Redux given this Syntax

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //  Mutating the state here
      //   Redux toolkit uses immer BTS
      state.items.push(action.payload);
      console.log("state", state);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // orginalState = ["pizza"]
    clearCart: (state) => {
      state.items.length = 0;
      //   return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
