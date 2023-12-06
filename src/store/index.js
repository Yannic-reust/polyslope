import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import restaurantReducer from './restaurant/restaurantState'
import liftReducer from './lift/liftState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
    restaurant: restaurantReducer,
    lift: liftReducer,
  },
})