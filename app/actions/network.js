/**
 * Created by zi on 2016/9/6.
 */
import Symbol from 'es6-symbol'

export const FETCH = 'FETCH'
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_REJECT = 'FETCH_REJECT'

export const loadWithAPI = (url) => disptch => {
	const symbol = Symbol("fetch")
	disptch({
		type: FETCH,
		url, symbol
	})
	return symbol
}