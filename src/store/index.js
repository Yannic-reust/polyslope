import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
  },
})