import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import slopesActiveReducer from './slopesActive/slopesActiveState'
import introReducer from './intro/introState'
import sunReducer from './sun/sunState'
import restaurantReducer from './restaurant/restaurantState'
import liftReducer from './lift/liftState'
import trackReducer from './track/trackState'
import musicReducer from './music/musicState'
import volumeReducer from './volume/volumeState'
import firstTimeReducer from './firstTime/firstTimeState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
    slopesActive: slopesActiveReducer,
    intro: introReducer,
    sun: sunReducer,
    restaurant: restaurantReducer,
    lift: liftReducer,
    track: trackReducer,
    music: musicReducer,
    volume: volumeReducer,
    firstTime: firstTimeReducer,

  },
})