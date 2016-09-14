import pull from 'lodash/pull'
//lodash function
export const fromPairs = (pairs)  => {
  var index = -1,
      length = pairs ? pairs.length : 0,
      result = {}

  while (++index < length) {
    var pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}

export const obj2query = (obj) => pull(Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`), undefined).join('&')
