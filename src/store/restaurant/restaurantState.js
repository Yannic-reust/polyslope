import { createSlice } from "@reduxjs/toolkit";

export const restaurants = createSlice({
  name: "restaurants",
  initialState: {
    value: null,
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRestaurants } = restaurants.actions;

export default restaurants.reducer;
