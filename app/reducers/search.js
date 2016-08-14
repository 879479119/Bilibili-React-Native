/**
 * @author RockSAMA
 * @description 主页面搜索相关
 */

import * as ActionTypes from '../actions/search'

export default (state = { searchHistory:[] ,isSearching:false}, action) => {
	switch (action.type) {
		case ActionTypes.STORE_SEARCH_HISTORY:
			return Object.assign({}, state, action.item)
		case ActionTypes.GET_SEARCH_HISTORY:
			return Object.assign({}, state, action.arr)
		case ActionTypes.CLEAN_HISTORY:
			return Object.assign({}, state, {searchHistory:[]})
		case ActionTypes.TOGGLE_SEARCH:
			return Object.assign({}, state, {isSearching: !state.isSearching})
		default:
			return state;
	}
};