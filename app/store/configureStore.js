import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import apiMiddleware from '../middleware/api'
// import networkMiddleware from '../middleware/network'
import api0Middleware from 'redux-api-simple-middleware'

const loggerMiddleware = createLogger({
	predicate: (getState, action) => __DEV__
});

//TODO: 之后把获取初始主题的事情放到这里

//性能调试和打包时删掉 loggerMiddleware
export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(
				thunkMiddleware,
				apiMiddleware,
				api0Middleware,
				loggerMiddleware
			)
		)
	)
}
