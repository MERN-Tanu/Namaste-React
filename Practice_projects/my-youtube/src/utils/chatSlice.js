import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_SET } from "./constant";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length) state.messages.splice(OFFSET_LIVE_SET, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
