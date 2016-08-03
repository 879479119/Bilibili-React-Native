const http = require('http')
const url = require('url')
const request = require('request')

const API_ROOT = 'http://api.bilibili.com'

function onRequest(client_req, client_res) {
  client_res.setHeader('Access-Control-Allow-Origin', '*')
  const u = url.parse(client_req.url)
  const options = {
    uri: `${API_ROOT}/${u.path}`,
    qs:u.query,
    method: client_req.method,
    headers:{
      'User-Agent':'BiLiBiLi React-Native Client/0.0.1 (ncysatnaf@gmail.com)',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  client_req.pipe(request(options)).on('error',(e)=> {
  }).pipe(client_res)
}

http.createServer(onRequest).listen(8000)
console.log('Server is listening to 8000')
