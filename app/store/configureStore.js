import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk)
)(createStore)

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	return store
}
