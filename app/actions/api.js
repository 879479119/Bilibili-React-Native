import { CALL_API } from '../middleware/api'
import { Schemas, SCHEMAS } from '../config/Schemas'
import { API } from '../config/constants'


function getHeader(){
  return {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
   }
}


export const API_PATH_REQUEST_ = 'API_PATH_REQUEST_'
export const API_PATH_SUCCESS_ = 'API_PATH_SUCCESS_'
export const API_PATH_FAILURE_ = 'API_PATH_FAILURE_'

function fetchApiWithPath(path) {
  return {
    [CALL_API]: {
      types: [ API_PATH_REQUEST_, API_PATH_SUCCESS_, API_PATH_FAILURE_ ],
      endpoint: API[path],
      schema: Schemas[SCHEMAS[path]],
      request: {
        method: 'GET',
        headers: getHeader()
      }
    }
  }
}

export function loadApiWithPath(path){
  return (dispatch, getState) => {

    return dispatch(fetchApiWithPath(path))
  }
}

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

function fetchUser(name) {
  return {
    [CALL_API]: {
      types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
      endpoint: `userinfo?user=${name}`,
      schema: Schemas.USER
    }
  }
}


export const loadUser = (name) => {
  return (dispatch, getState) => {

    return dispatch(fetchUser(name))
  }
}
