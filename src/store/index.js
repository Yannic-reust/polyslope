import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import slopesActiveReducer from './slopesActive/slopesActiveState'
import introReducer from './intro/introState'
import sunReducer from './sun/sunState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
    slopesActive: slopesActiveReducer,
    intro: introReducer,
    sun: sunReducer,
  },
})