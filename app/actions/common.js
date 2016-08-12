import { setItem, multiGetItem } from '../util/Storage'

//全局通用方法，测试用
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';

export const handleInputChange = (key, value, parent) => {
	return {
		type: HANDLE_INPUT_CHANGE,
		parent: parent,
		data: {
			[key]: value
		}
	};
};


/**
 *处理主题切换／设置
 *@key: activeTheme, settingTheme
 *@value: blue, night, etc...
 */

export const handleThemeChange = (key, value) => {
	return async (dispatch, getState) => {
		await setItem(key, value)
		return dispatch(receiveThemeChange(key,value))
	}
}

export const RECEIVE_THEME_CHANGE = 'RECEIVE_THEME_CHANGE';
const receiveThemeChange = (key, value) => {
	return {
		type: RECEIVE_THEME_CHANGE,
		data: {
			[key]: value
		}
	}
}

/**
 * 启动app初始化，从storage中拿数据
 *@items: <array>
 */

const checkStorageSetting = (items) => {
	if(items.settingTheme === null){
		items.settingTheme = 'blue'
	}
	if(items.activeTheme === null){
		items.activeTheme = 'blue'
	}
	return items
}

//检查获取到的数据并初始化
export const loadStorageSetting = (...item) => {
	return async(dispatch,getState) => {
		let items = await multiGetItem(item)
		items = checkStorageSetting(items)
		return dispatch(fetchStorageSetting(items))
	}
}

export const FETCH_STORAGE_SETTING = 'FETCH_STORAGE_SETTING'

const fetchStorageSetting = (items) => {
	return {
		type: FETCH_STORAGE_SETTING,
		items
	}
}

export const setSearchHistory = (key,value) => {
	return (dispatch, getState) => {
		console.log(233333);
		return dispatch(storeHistory(value))
	}
}

export const STORE_SEARCH_HISTORY = "STORE_SEARCH_HISTORY"

const storeHistory = (history) => {
	return{
		type:STORE_SEARCH_HISTORY,
		history
	}
}
