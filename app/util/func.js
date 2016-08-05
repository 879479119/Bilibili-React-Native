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
