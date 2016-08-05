/*
 * 根页面
 */

import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	DrawerLayoutAndroid,
	Dimensions,
	TextInput,
	TouchableOpacity,
	Text,
	ToastAndroid,
	Platform
} from 'react-native'
import {connect} from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import LivePage from './LivePage'
import RecommendPage from './RecommendPage'
import BangumiPage from './BangumiPage'
import SectionPage from './SectionPage'
import AttentionPage from './AttentionPage'
import DiscoveryPage from './DiscoveryPage'
import DownloadPage from './DownloadPage'
import SliderScreen from './SliderScreen'

import ToolBar from '../components/ToolBar';

import setting from '../config/setting';
import {HandleInputChange, loadStorageSetting} from '../actions/common';

class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.props.loadStorageSetting(
			'settingTheme',
			'activeTheme'
		)
	}

	/*
	 * 定义全局Context， 子组件可通过context调用
	 clss Child extends Component{
		 static contextTypes = {
		    Theme: React.PropTypes.string.isRequired
		 },
		 render() {
		    return <View>{this.context.Theme}</View>;
		 }
	 }
	 **/

	static childContextTypes = {
		Theme: React.PropTypes.string.isRequired
	};

	getChildContext = () => {
		return {
			Theme: setting[this.props.activeTheme]
		};
	};

	renderNavigatorView = () => {
		return (
			<SliderScreen navigator={this.props.navigator}/>
		)
	};

	openDrawer = () => {
		this.drawer.openDrawer();
	};

	goDownload = () => {
		this.props.navigator.push({
			component: DownloadPage,
		})
	};

	render() {
		let {navigator, activeTheme} = this.props;
		Theme = 'blue';
		if (Platform.os === 'ios') {
			return (
				<View style={styles.container}>
				</View>
			);
		} else {
			return (
				<DrawerLayoutAndroid
					ref={drawer=> {this.drawer = drawer}}
					drawerWidth={260}
					drawerPosition={DrawerLayoutAndroid.positions.left}
					renderNavigationView={this.renderNavigatorView}
				>
					<View style={styles.container}>
						<ToolBar
							goDownload={this.goDownload}
							openDrawer={this.openDrawer}/>
						<ScrollableTabView
							tabBarActiveTextColor={'#fff'}
							tabBarInactiveTextColor={'#eee'}
							tabBarBackgroundColor={setting[activeTheme]}
							tabBarUnderlineColor={'#fff'}
							scrollWithoutAnimation={true}>
							<LivePage navigator={navigator} tabLabel="直播"/>
							<RecommendPage navigator={navigator} tabLabel="推荐"/>
							<BangumiPage navigator={navigator} tabLabel="番剧"/>
							<SectionPage navigator={navigator} tabLabel="分区"/>
							<AttentionPage navigator={navigator} tabLabel="关注"/>
							<DiscoveryPage navigator={navigator} tabLabel="发现"/>
						</ScrollableTabView>
					</View>
				</DrawerLayoutAndroid>
			)
		}
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1
	},
	Toolbar: {
		...Platform.select({
			android: {
				height: 55
			}
		})
	}
});

function mapStateToProps(state) {
	const {
		common:	{activeTheme},
	} = state;
	return {
		activeTheme
	}
}

export default connect(mapStateToProps, {
	HandleInputChange,
	loadStorageSetting
})(MainPage)
