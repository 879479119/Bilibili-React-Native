import {LayoutAnimation} from 'react-native'
/**
 * @author RockSAMA
 * @description 主页面搜索相关
 */
import { setItem, getRawItem, removeItem } from '../util/Storage'

/**
 * 存储搜索的历史到Storage
 * @param list
 * @param value
 * @returns {function()}
 */

export const setSearchHistory = (list,value) => {
	let newList = list.concat([value]);
	return async (dispatch, getState) => {
		await setItem("history",newList.join(","));
		return dispatch(storeHistory({searchHistory:newList}))
	}
};

export const STORE_SEARCH_HISTORY = "STORE_SEARCH_HISTORY";

const storeHistory = (item) => ({
	type:STORE_SEARCH_HISTORY,
	item
});

/**
 * 获取搜索历史
 * @returns {function()}
 */

export const getSearchHistory = () => {
	return async (dispatch) => {
		let history = await getRawItem("history")
		let hisArr = null
		if(history == null){
			hisArr = []
		}else{
			hisArr = history.split(",")
			if(hisArr[0] === "") hisArr.splice(0,1)
		}
		dispatch(gotHistory({searchHistory:hisArr}))
	}
}

export const GET_SEARCH_HISTORY = "GET_SEARCH_HISTORY"

const gotHistory = (arr) => ({
	type:GET_SEARCH_HISTORY,
	arr
})

/**
 * 清除搜索历史
 * @returns {function()}
 */

export const CLEAN_HISTORY = "CLEAN_HISTORY"

export const cleanSearchHistory = () => {
	return (dispatch) => {
		removeItem("history")
		dispatch({
			type:CLEAN_HISTORY
		})
	}
}


/**
 * 打开搜索栏
 * @returns {function()}
 */

export const TOGGLE_SEARCH = "TOGGLE_SEARCH"

export const toggleSearch = () => {
	return (dispatch) => {
		//动画
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		dispatch({
			type:TOGGLE_SEARCH
		})
	}
}

/**
 * 得到搜索结果后开始渲染
 * @type {object}
 */


export const RSP_SUCCESS_RENDER = "RSP_SUCCESS_RENDER"

export const rspSuccess = (result) => {
	return (dispatch) => {
		dispatch({
			type:RSP_SUCCESS_RENDER,
			result:result
		})
	}
}

/**
 * 没有办法通过navigator传值，只好用state
 * @type {string}
 */


export const GO_TO_VIDEO_DETAIL = "GO_TO_VIDEO_DETAIL"

export const goDetail = aid => disptch => {
	disptch({
		type:GO_TO_VIDEO_DETAIL,
		aid:aid
	})
}