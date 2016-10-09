/*
 * 路由页
 */
import React, {Component} from 'react'
//noinspection JSUnresolvedVariable
import {
	StyleSheet,
	Navigator,
	View,
	BackAndroid,
	StatusBar,
	Platform,
	ToastAndroid,
	UIManager
} from 'react-native'

import { connect } from 'react-redux';
import setting from '../config/setting';
import { SplashScreen,  MainPage,  DownloadPage,  SettingPage, ThemePage, SearchPage, VideoDetailPage, WebViewPage } from '../containers';
import {toggleSearch, loadStorageSetting } from '../actions';
import {HandleBackPressWhenSearch} from './SearchScreen';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.loadStorageSetting(
			'settingTheme',
			'activeTheme'
		)
		//android动画支持
		//noinspection JSUnresolvedVariable,JSUnresolvedFunction
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
		}
	}

	onBackAndroid = () => {
		const navigator = this.navigator;
		let routes = navigator.getCurrentRoutes();
		let lastRoute = routes[routes.length - 1]
		//处理路由以外的返回按键
		let flag = HandleBackPressWhenSearch(this)
		if(flag === true){
			return true
		}

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
				case 'SearchPage':
					return <SearchPage navigator={navigator}/>;
					break;
				case 'VideoDetail':
					return <VideoDetailPage navigator={navigator} {...route.params}/>
				case 'WebView':
					return <WebViewPage navigator={navigator} {...route.params}/>
				default:
					return (
						<View><Text>空路由，如果不想到达此页请勿传name进入</Text></View>
					)
			}
		}
		if (route.component) {
			let Component = route.component;
			return(
				<Component navigator={navigator} {...route.params}/>
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

const mapStateToProps = (state) => {
	const {
		search: {isSearching}
	} = state
	return {
		isSearching,
	}
}

export default connect(mapStateToProps,{
	toggleSearch,
	loadStorageSetting
})(App)
