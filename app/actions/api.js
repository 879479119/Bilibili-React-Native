import { CALL_API, Schemas } from '../middleware/api'

const API = {
  base: 'http://bilibili-service.daoapp.io',
  bangumi: 'http://bilibili-service.daoapp.io/bangumi'
}

const SCHEMAS = {
  bangumi: 'BANGUMI'
}

function getHeader(){
  return {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
   }
}


export const BANGUMI_REQUEST = 'BANGUMI_REQUEST'
export const BANGUMI_SUCCESS = 'BANGUMI_SUCCESS'
export const BANGUMI_FAILURE = 'BANGUMI_FAILURE'

function fetchApiWithPath(path) {
  return {
    [CALL_API]: {
      types: [ BANGUMI_REQUEST, BANGUMI_SUCCESS, BANGUMI_FAILURE ],
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
