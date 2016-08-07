import {AsyncStorage} from 'react-native'
import {fromPairs} from './func'


export const setItem = (key ,value) => {
  return AsyncStorage.setItem(key,value)
}

export const multiGetItem = async (key) => {
  let result = await AsyncStorage.multiGet(key)
  let item = fromPairs(result)
  return item
}

export const getItem = async (key) => {
  let result = await AsyncStorage.getItem(key)
  return JSON.parse(result)
}

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key)
}
