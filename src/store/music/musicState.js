import { createSlice } from "@reduxjs/toolkit";

export const music = createSlice({
  name: "music",
  initialState: {
    value: false,
  },
  reducers: {
    toggleMusic: (state) => {
      state.value = !state.value;
   },
  },
});

export const { toggleMusic } = music.actions;

export default music.reducer;
