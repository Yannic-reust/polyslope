import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import slopesActiveReducer from './slopesActive/slopesActiveState'
import introReducer from './intro/introState'
import sunReducer from './sun/sunState'
import restaurantReducer from './restaurant/restaurantState'
import liftReducer from './lift/liftState'
import trackReducer from './track/trackState'
import snowDataReducer from './snowData/snowDataState'

export default configureStore({
  reducer: {
    animation: animationsReducer,

    slopesActive: slopesActiveReducer,
    intro: introReducer,
    sun: sunReducer,

    restaurant: restaurantReducer,
    lift: liftReducer,
    track: trackReducer,
    snowData: snowDataReducer

  },
})