import { createSlice } from "@reduxjs/toolkit";

export const intro = createSlice({
  name: "intro",
  initialState: {
    value: true,
  },
  reducers: {
    toggleIntro: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleIntro } = intro.actions;

export default intro.reducer;
