import {AsyncStorage} from 'react-native'

export const setItem = (key ,value) => {
  return AsyncStorage.setItem(key,JSON.stringify(value))
}

export const getItem = async (key) => {
  await AsyncStorage.getItem(key).then(result=> {
    if(result){
      return Promise.resolve(JSON.parse(result))
    } else {
      return null
    }
  })
}

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key)
}
