import { combineReducers } from 'redux'
import common from './common'
import paginate from './paginate'
import ActionTypes from '../actions/data'

function entities(state = { users: {}, videos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}


//
// //分页
// const pagination = combineReducers({
//   allBangumi: paginate({
//     mapActionToKey: action => 'bangumi',
//     types: [
//       ActionTypes.BANGUMI_REQUEST,
//       ActionTypes.BANGUMI_SUCCESS,
//       ActionTypes.BANGUMI_FAILURE
//     ]
//   })
// })

export default combineReducers ({
  entities,
  common,
})
