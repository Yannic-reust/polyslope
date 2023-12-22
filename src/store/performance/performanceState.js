import { createSlice } from "@reduxjs/toolkit";

export const PerformanceMode = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high"
}

export const performance = createSlice({
  name: "performance",
  initialState: {
    value: PerformanceMode.MEDIUM,
  },
  reducers: {
    setPerformance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPerformance } = performance.actions;

export default performance.reducer;
