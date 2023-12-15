import { createSlice } from "@reduxjs/toolkit";
import audioService from "../../services/audioService";


export const music = createSlice({
  name: "music",
  initialState: {
    value: false,
  },
  reducers: {
    toggleMusic: (state) => {
      state.value = !state.value;

      if (state.value == true) {
        const tracks = ["./music/Calmness.mp3"];
        audioService.initialize(tracks);
        audioService.play();
      } else {
        audioService.stop();
      }
   },
  },
});

export const { toggleMusic } = music.actions;

export default music.reducer;
