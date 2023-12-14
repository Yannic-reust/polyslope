import { createSlice } from "@reduxjs/toolkit";

export const lift = createSlice({
  name: "lift",
  initialState: {
    value: null,
  },
  reducers: {
    setLift: (state, action) => {
      let currentLift = [];
      let lifts = action.payload;
      lifts.forEach((e) => {
        if (
          e.id != "muerren_schilthorn_lift_1_lauterbrunnen_-_muerren" &&
          e.id != "muerren_schilthorn_lift_6_stechelberg_-_gimmelwald" &&
          e.id != "muerren_schilthorn_lift_3_gruetschalp_-_winteregg" &&
          e.id != "muerren_schilthorn_lift_5_stechelberg_-_schilthorn" &&
          e.id != "muerren_schilthorn_lift_4_winteregg_-_muerren"
        ) {
          currentLift.push(e);
        }
      });
      state.value = currentLift;
    },
  },
});

export const { setLift } = lift.actions;

export default lift.reducer;
