import { createSlice } from "@reduxjs/toolkit";

export const snowData = createSlice({
  name: "snowData",
  initialState: {
    value: null,
  },
  reducers: {
    setSnowData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSnowData } = snowData.actions;

export default snowData.reducer;
