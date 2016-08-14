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

/**
 * 获取JSON格式的Storage
 * @param key
 */

export const getItem = async (key) => {
  let result = await AsyncStorage.getItem(key)
  return JSON.parse(result)
}

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key)
}

/**
 * 获取字符串格式的Storage
 * @param key
 */

export const getRawItem = async key => await AsyncStorage.getItem(key)