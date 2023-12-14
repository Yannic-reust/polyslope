import { createSlice } from "@reduxjs/toolkit";

export const slopesActive = createSlice({
  name: "slopesActive",
  initialState: {
    value: ["Gelb", "Blau", "Rot", "Schwarz"],
  },
  reducers: {
    toggleSlope: (state, action) => {
     
      const slopeIndex = state.value.indexOf(action.payload);

      if (slopeIndex !== -1) {
        state.value.splice(slopeIndex, 1);
      } else {
        state.value.push(action.payload);
      }
     
    },
  },
});

export const { toggleSlope } = slopesActive.actions;

export default slopesActive.reducer;
