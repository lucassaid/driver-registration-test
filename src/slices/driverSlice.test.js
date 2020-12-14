import driverReducer, { initialState, updateDriverData } from './driverSlice'

describe('driver reducer', () => {
  it('should handle initial state', () => {
    expect(driverReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle updateDriveData', () => {
    expect(
      driverReducer({}, {
        type: updateDriverData.type,
        payload: {
          name: 'TEST'
        }
      })
    ).toEqual({
      ...initialState,
      data: { name: 'TEST' }
    })
  })
})