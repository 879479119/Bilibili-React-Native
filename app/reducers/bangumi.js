import * as Api from '../actions/api'

const bangumi = (state = {}, action) => {
	switch (action.type) {
		case Api.RECEIVE_DATA:
    if(action.reducer === 'bangumi')
			return Object.assign({}, state, action.data)
		default:
			return state;
	}
};

export default bangumi
