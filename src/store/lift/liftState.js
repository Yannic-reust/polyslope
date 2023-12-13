import { createSlice } from "@reduxjs/toolkit";

export const lift = createSlice({
  name: "lift",
  initialState: {
    value: null,
  },
  reducers: {
    setLift: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLift } = lift.actions;

export default lift.reducer;
