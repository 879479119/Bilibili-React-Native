import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import App from './containers/App'

let store = configureStore()

export default class Main extends Component {
	render = () => {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		)
	}
}
