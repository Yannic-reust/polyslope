import { createSlice } from "@reduxjs/toolkit";

// function to check if string only contains numbers
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

export const track = createSlice({
  name: "track",
  initialState: {
    value: null,
  },
  reducers: {
    setTrack: (state, action) => {

      let tracks = action.payload;

      // gets reals number of slope and ads it as mappedNumber to tracks array
      tracks.forEach((track) => {
        let trackIdSplit = track.id.split("_").reverse(); // creates reversed array out of track id split by "_"
        let trackIdSplitIndex = trackIdSplit.findIndex(containsOnlyNumbers); // finds first number in array
        track.mappedNumber = parseInt(trackIdSplit[trackIdSplitIndex]);
      })

      state.value = tracks;
    },
  },
});

export const { setTrack } = track.actions;

export default track.reducer;
