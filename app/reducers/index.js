import {combineReducers} from 'redux'
import common from './common'
import search from './search'
import detail from './detail'
import paginate from './paginate'
import * as ActionTypes from '../actions/api'
import merge from 'lodash/merge'
import {SimpleAPIReducer} from 'redux-api-simple-middleware'

function entities(state = { users: {}, bangumi: {}, }, action) {
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

const rootReducer = combineReducers ({
  entities,
  common,
  search,
  detail,
  SimpleAPIReducer
})

export default rootReducer
