/*
 * 路由页
 */
import React, {Component} from 'react'
import {
	StyleSheet,
	Navigator,
	View,
	BackAndroid,
	StatusBar,
	Platform,
	ToastAndroid
} from 'react-native'

import SplashScreen from './SplashScreen'
import MainPage from './MainPage'
import DownloadPage from './DownloadPage'
import SettingPage from './SettingPage'
import ThemePage from './ThemePage'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
		}
	}

	onBackAndroid = () => {
		const navigator = this.navigator;
		const routes = navigator.getCurrentRoutes();

		if (navigator && routes.length > 1) {
			navigator.pop();
			return true
		}
		else if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
			return false
		}
		else {
			ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
			this.lastBackPressed = Date.now();
			return true
		}
	};

	renderScene = (route, navigator) => {
		if (route.name) {
			switch (route.name) {
				case 'SplashScreen':
					return <SplashScreen navigator={navigator}/>;
					break;
				case 'MainPage':
					return <MainPage navigator={navigator}/>;
					break;
				case 'DownloadPage':
					return <DownloadPage navigator={navigator}/>;
					break;
				default:
					return <View>
					</View>;
			}
		}
		if (route.component) {
			let Component = route.component;
			return(
				<Component navigator={navigator} {...route.passProps}/>
			);
		}
	};
	configureScene = (route, navigator) => {
		return Navigator.SceneConfigs.FadeAndroid;
	};

	render() {
		return (
			<View style={styles.container}>
				<Navigator
					ref={navigator => { this.navigator = navigator }}
					style={styles.navigator}
					configureScene={this.configureScene}
					renderScene={this.renderScene}
					initialRoute={{
			            name: 'SplashScreen'
			        }}
				/>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navigator: {
		flex: 1
	}
});
