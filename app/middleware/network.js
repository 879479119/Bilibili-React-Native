/**
 * Created by zi on 2016/9/6.
 */
import * as N from '../actions/network'

export default store => next => action => {

	function actionWith(data) {
		// console.info(Object.assign({}, action, data))
		return Object.assign({}, action, data)
	}

	if(action.type == N.FETCH){
		next(actionWith({ type: N.FETCH_REQUEST }))
	}

	if(action.url){
		return loadWithAPI(action.url)
			.then(rsp => rsp.json())
			.then(
			rsp => next(actionWith({
				rsp,
				type: N.FETCH_SUCCESS
			})),
			error => next(actionWith({
				type: N.FETCH_REJECT,
				error: error.message
			}))
		).catch((err) => {
			console.log(err)
		})
	}else{
		return next(action)
	}


}

function loadWithAPI(url) {
	// console.info(url)
	return fetch(url)
}

export const netReducer = (state = { data: {}, fetchState: 0 }, action) => {
	// property fetchState is defined to describe the fetch state
	// 0 for no network activity, 1 for processing, 2 for success, -1 for failed

	// console.info(state,action,'555555555555646465456456')
	switch (action.type){
		case N.FETCH_REQUEST:
			return Object.assign({}, state, {fetchState: 1, symbol:action.symbol})
		case N.FETCH_SUCCESS:
			return Object.assign({}, state, {fetchState: 2, data: action.rsp, symbol:action.symbol})
		case N.FETCH_REJECT:
			return Object.assign({}, state, {fetchState: -1, rsp: action.rsp, symbol:action.symbol})
		default:
			return state
	}
}
