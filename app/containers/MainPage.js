/*
 * 根页面
 */

import React, {Component} from 'react'
//noinspection JSUnresolvedVariable
import PropTypes from "prop-types"

import {
	View,
	StyleSheet,
	DrawerLayoutAndroid,
	Dimensions,
	TextInput,
	TouchableOpacity,
	Text,
	ToastAndroid,
	Platform,
	StatusBar
} from 'react-native'
import {connect} from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import { LivePage, RecommendPage,  BangumiPage,  SectionPage,  AttentionPage,  DiscoveryPage,  DownloadPage, SliderScreen, SearchScreen } from '../containers'

import { ToolBarAndroid } from '../components';

import setting from '../config/setting';
import {loadStorageSetting} from '../actions/common';
import {toggleSearch} from '../actions/search'
import WebViewPage from './WebViewPage'

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

	componentDidMount(){

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
		Theme: PropTypes.string.isRequired
	};

	getChildContext = () => {
		return {
			Theme: setting[this.props.activeTheme]
		}
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
			name: 'DownloadPage'
		})
	};

	openSearch = () => {
		this.props.toggleSearch()
	}

	render() {
		let {navigator, activeTheme, isSearching} = this.props;
		if (Platform.OS === 'ios') {
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
					<StatusBar
						backgroundColor={setting[activeTheme]} />
					<View style={[styles.container]}>
						<ToolBarAndroid
							goDownload={this.goDownload}
							openDrawer={this.openDrawer}
							goSearch={this.openSearch}/>
						<ScrollableTabView
							initialPage={1}
							tabBarActiveTextColor={'#fff'}
							tabBarInactiveTextColor={'#eee'}
							tabBarBackgroundColor={setting[activeTheme]}
							tabBarUnderlineColor={'#fff'}
							scrollWithoutAnimation={true}
							prerenderingSiblingsNumber={Number.POSITIVE_INFINITY}>
							<LivePage navigator={navigator} tabLabel="直播"/>
							<RecommendPage navigator={navigator} tabLabel="推荐"/>
							<BangumiPage navigator={navigator} tabLabel="番剧"/>
							<SectionPage navigator={navigator} tabLabel="分区"/>
							<AttentionPage navigator={navigator} tabLabel="关注"/>
							<DiscoveryPage navigator={navigator} tabLabel="发现"/>
						</ScrollableTabView>
					</View>
					<SearchScreen isShow={isSearching} navigator={navigator}/>
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
})

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	isSearching:state.search.isSearching,
})

export default connect(mapStateToProps, {
	loadStorageSetting,
	toggleSearch
})(MainPage)
