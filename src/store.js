import { configureStore } from '@reduxjs/toolkit'

import driverReducer from './slices/driverSlice'

export default configureStore({
  reducer: {
    driver: driverReducer,
  },
  devTools: true,
})
