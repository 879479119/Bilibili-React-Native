export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'

export const handleInputChange = (key,value,parent) => {
  return {
    type: HANDLE_INPUT_CHANGE,
    parent: parent,
    data: {
      [key]:value
    }
  }
}
