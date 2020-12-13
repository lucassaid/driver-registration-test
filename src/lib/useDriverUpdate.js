import {
  updateDriverData,
  driverDataSelector,
  createNewDriver
} from '../slices/driverSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

export default function useDriverUpdate(redirectUrl, final) {
  const history = useHistory();
  const dispatch = useDispatch()
  const driver = useSelector(driverDataSelector)
  
  const updateDriver = data => {
    // create updated data
    const newData = {...driver, ...data}

    // update redux state
    dispatch(updateDriverData(newData))
    
    // redirect
    history.push(redirectUrl)

    // POST request to the api (only in the last screen)
    final && dispatch(createNewDriver(newData))
  }
  return [driver, updateDriver]
}