import {
  updateDriverData,
  driverDataSelector,
  createNewDriver
} from '../slices/driverSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

/**
 * Simple hook to make it easy to add "steps" in the app. It updates
 * the driver's object in the redux state and navigates to a given path.
 * @param {string} redirectPath - Path to go after updating
 * @param {boolean} final - Whether to make the POST request
 * @returns {Array} current driver object and a function to update it
 */
export default function useDriverUpdate(redirectPath, final) {
  const history = useHistory();
  const dispatch = useDispatch()
  const driver = useSelector(driverDataSelector)
  
  const updateDriver = data => {
    // create updated data
    const newData = {...driver, ...data}

    // update redux state
    dispatch(updateDriverData(newData))
    
    // redirect
    history.push(redirectPath)

    // POST request to the api (only in the last step)
    final && dispatch(createNewDriver(newData))
  }
  return [driver, updateDriver]
}