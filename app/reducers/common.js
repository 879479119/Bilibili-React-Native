import * as ActionTypes from '../actions/common'

const common = (state = { activeTheme:'blue', settingTheme:{} }, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_STORAGE_SETTING:
			return Object.assign({}, state, action.items)
		case ActionTypes.RECEIVE_THEME_CHANGE:
			return Object.assign({}, state, action.data)
		case ActionTypes.HANDLE_INPUT_CHANGE:
			if (action.parent == 'common') {
				return Object.assign({}, state, action.data)
			}
			break;
		default:
			return state;
	}
};

export default common
