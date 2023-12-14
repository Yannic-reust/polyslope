import { createSlice } from '@reduxjs/toolkit'

export const animations = createSlice({
  name: 'animations',
  initialState: {
    value: true

  },
  reducers: {
    toggleAnimation: (state) => {
      state.value = !state.value
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { toggleAnimation} = animations.actions

export default animations.reducer