import * as ActionTypes from '../actions/common'

const common = (state={}, action) => {
  const {type} = action
  switch (type) {
    case ActionTypes.HandleInputChange:
      if(action.parent == 'common'){
        return Object.assign({}, state, action.data)
      }
    default:
      return state
  }
}

export default common
