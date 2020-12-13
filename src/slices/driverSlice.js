import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiURL } from '../lib/consts'

/*
* Call this function to fetch driverData from the above api.
* The result will be added to redux store.
*/
export const createNewDriver = createAsyncThunk(
  'driverData/createNewDriver',
  async (driver, thunkAPI) => {
    try {
      if(driver.name == 'TEST_ERROR') throw new Error('test')
      const { data } = await axios.post(apiURL, driver)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const driverDataSlice = createSlice({
  name: 'driverData',
  initialState: {
    data: {},
    creationState: 'idle'
  },
  reducers: {
    updateDriverData: (state, {payload}) => {
      state.creationState = 'idle'
      state.data = payload
    },
  },
  extraReducers: {
    [createNewDriver.pending]: (state) => {
      state.creationState = 'loading'
    },
    [createNewDriver.fulfilled]: (state, action) => {
      state.data = action.payload
      state.creationState = 'success'
    },
    [createNewDriver.rejected]: (state, action) => {
      state.creationState = 'error'
      state.error = action.payload.error
    },
  },
})


export const driverDataSelector = state => state.driver.data
export const driverCreationStateSelector = state => state.driver.creationState

export const {
  updateDriverData,
} = driverDataSlice.actions

export default driverDataSlice.reducer