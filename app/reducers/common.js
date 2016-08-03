import * as ActionTypes from '../actions/common'

const common = (state = {Theme: 'blue'}, action) => {
	switch (action.type) {
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
