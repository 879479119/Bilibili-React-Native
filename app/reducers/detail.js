/**
 * @author RockSAMA
 * @description reducer for videoDetailPage
 */

import * as ActionTypes from '../actions/detail'

export default (state = { result: undefined }, action) => {
	switch (action.type) {
		case ActionTypes.READY_TO_RENDER:
			return Object.assign({}, state, {result: action.result})
		default:
			return state
	}
};