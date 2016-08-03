import { CALL_API, Schemas } from '../middleware/api'

const API = {
<<<<<<< c4af4a579106820e8fcabb23503c24783aaab843
  base: 'http://bilibili-service.daoapp.io',
  bangumi: 'http://bilibili-service.daoapp.io/bangumi'
=======
  base: 'http://api.bilibili.com',
  bangumi: 'http://app.bilibili.com/bangumi/timeline_v2'
>>>>>>> build simple api flow
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
<<<<<<< c4af4a579106820e8fcabb23503c24783aaab843
      endpoint: API.bangumi,
=======
      endpoint: API['bangumi'],
>>>>>>> build simple api flow
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
