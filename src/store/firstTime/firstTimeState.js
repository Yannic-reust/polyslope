import { createSlice } from "@reduxjs/toolkit";

export const firstTime = createSlice({
  name: "firstTime",
  initialState: {
    value: true,
  },
  reducers: {
    setFirstTime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFirstTime } = firstTime.actions;

export default firstTime.reducer;
