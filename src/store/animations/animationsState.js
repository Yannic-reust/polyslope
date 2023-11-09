import { createSlice } from '@reduxjs/toolkit'

export const animations = createSlice({
  name: 'counter',
  initialState: {
    value: false

  },
  reducers: {
    toggleAnimation: (state) => {
      state.value = !state.value
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleAnimation} = animations.actions

export default animations.reducer