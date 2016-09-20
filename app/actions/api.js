export const RECEIVE_DATA = 'RECEIVE_DATA'

export const receiveData = (reducer, data ) => {
  return {
    type: RECEIVE_DATA,
    reducer,
    data
  }
}
