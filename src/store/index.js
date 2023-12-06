import { configureStore } from '@reduxjs/toolkit'
import animationsReducer from './animations/animationsState'
import restaurantReducer from './restaurant/restaurantState'

export default configureStore({
  reducer: {
    animation: animationsReducer,
    restaurant: restaurantReducer,
  },
})