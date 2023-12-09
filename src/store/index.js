import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import slopesActiveReducer from './slopesActive/slopesActiveState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
    slopesActive: slopesActiveReducer,
  },
})