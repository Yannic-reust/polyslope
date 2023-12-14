import { createSlice } from "@reduxjs/toolkit";

export const sun = createSlice({
  name: "sun",
  initialState: {
    value: 3,
  },
  reducers: {
    setSun: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setSun } = sun.actions;

export default sun.reducer;
