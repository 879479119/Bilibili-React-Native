const baseAPI = 'http://bilibili-service.daoapp.io'

export const API = {
  bangumi: {
    path: `${baseAPI}/bangumi`,
    method: 'GET'
  },
  allrank: {
    path: `${baseAPI}/allrank`,
    method: 'GET'
  },
  search: {
    path: `${baseAPI}/search`,
    method: 'POST',
  }
}
