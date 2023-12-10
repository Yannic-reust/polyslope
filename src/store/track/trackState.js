import { createSlice } from "@reduxjs/toolkit";

export const track = createSlice({
  name: "track",
  initialState: {
    value: null,
  },
  reducers: {
    setTrack: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTrack } = track.actions;

export default track.reducer;
