import { CALL_API, Schemas } from '../middleware/api'

const API = {
  base: 'http://bilibili-service.daoapp.io',
  bangumi: 'http://bilibili-service.daoapp.io/bangumi'
}

function getHeader(){
  return (
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     }
   )
}


export const BANGUMI_REQUEST = 'BANGUMI_REQUEST'
export const BANGUMI_SUCCESS = 'BANGUMI_SUCCESS'
export const BANGUMI_FAILURE = 'BANGUMI_FAILURE'

function fetchBangumi() {
  return {
    [CALL_API]: {
      types: [ BANGUMI_REQUEST, BANGUMI_SUCCESS, BANGUMI_FAILURE ],
      endpoint: API.bangumi,
      schema: Schemas.BANGUMI,
      request: {
        method: 'GET',
        headers: getHeader()
      }
    }
  }
}

export const loadBangumi = () => {
  return (dispatch, getState) => {

    return dispatch(fetchBangumi())
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


export function loadUser(name) {
  return (dispatch, getState) => {

    return dispatch(fetchUser(name))
  }
}
