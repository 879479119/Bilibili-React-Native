import {combineReducers} from 'redux'
import common from './common'
import search from './search'
import detail from './detail'
import bangumi from './bangumi'
import paginate from './paginate'
import * as ActionTypes from '../actions/api'
import merge from 'lodash/merge'
import {SimpleAPIReducer} from 'redux-api-simple-middleware'

const rootReducer = combineReducers ({
  common,
  search,
  detail,
  bangumi,
  SimpleAPIReducer
})

export default rootReducer
