import { createSlice } from "@reduxjs/toolkit";

export const volume = createSlice({
  name: "volume",
  initialState: {
    value: false,
    
  },
  reducers: {
    toggleVolume: (state) => {
      state.value = !state.value;
   },
   
  },
});

export const { toggleVolume } = volume.actions;

export default volume.reducer;
