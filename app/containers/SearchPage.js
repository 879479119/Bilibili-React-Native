/**
 * @author RockSAMA
 */

import React, {Component} from 'react'
import PropTypes from "prop-types"

//noinspection JSUnresolvedVariable
import {
	View,
	ScrollView,
	Image,
	StyleSheet,
	DrawerLayoutAndroid,
	Dimensions,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
	Text,
	ToastAndroid,
	Platform,
	StatusBar
} from 'react-native'
import {connect} from 'react-redux'

import SearchScreen from './SearchScreen'
import VideoDetailPage from './VideoDetailPage'

import setting from '../config/setting';
import {loadStorageSetting} from '../actions/common';
import {toggleSearch,rspSuccess,goDetail} from '../actions/search'

const {width,height} = Dimensions.get('window')

class SearchTop extends Component {
	constructor(props){
		super(props);

	}
	_back = () => {
		// this.props.toggleSearch();
		const {navigator} = this.props
		navigator.pop()
	}
	render = () => {
		return (
			<View style={style.header}>
				<View style={style.wrapper}>
					<TouchableHighlight onPress={this._back} style={[style.leftArea,{marginLeft:5}]} underlayColor="#000">
						<Image source={require("../resource/icons/ic_arrow_back_black.png")} style={style.headIcon}/>
					</TouchableHighlight>
					<TextInput autoFocus={false} onChangeText={value => this.textValue = value} style={style.input} placeholder="搜索视频、番剧、up主或av号"/>
					<TouchableHighlight style={[style.rightArea,{marginRight:5}]}>
						<Image source={require("../resource/icons/ic_scan.png")} style={style.headIcon}/>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

class TabCell extends Component {
	constructor(props){
		super(props)
	}
	render = () => {
		const {name,num} = this.props
		const count = num == undefined ? "" : `(${num})`
		return (
			<TouchableHighlight style={style.tabTouch}>
				<View style={style.tabBorder}>
					<Text style={style.tabText}>{name}{count}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

class VideoCell extends Component {
	constructor(props){
		super(props)
	}

	// static contextTypes = {
	// 	goDetail: PropTypes.func.isRequired,
	// }

	_goDetail = () => {
		const {navigator} = this.props
		// const {goDetail} = this.context
		// goDetail(this.touch.props.aid)
		navigator.push({
			component:VideoDetailPage,
			params:{
				aid:this.touch.props.aid
			}
		})
	}

	render(){
		const {item} = this.props
		return (
			<TouchableHighlight onPress={this._goDetail} key={item.aid} aid={item.aid} ref={k => this.touch = k}>
				<View style={style.videoCell}>
					<View style={style.videoPic}>
						<Image source={{uri:item.pic}} style={{width:150,height:100}} resizeMode="contain"/>
					</View>
					<View style={style.rightContent}>
						<View style={style.title}><Text style={{fontWeight:"bold"}}>{item.title}</Text></View>
						<View style={style.author}>
							<Image source={require("../resource/icons/ic_category_up.png")} style={{width:20}} resizeMode="contain"/>
							<Text>{item.author}</Text>
						</View>
						<View style={style.playTime}>
							<Image source={require("../resource/icons/ic_info_views.png")} style={{width:16,tintColor:"#ddd"}} resizeMode="contain"/>
							<Text>{item.play}</Text>
							<Image source={require("../resource/icons/ic_info_danmakus.png")} style={{width:16,tintColor:"#ddd"}} resizeMode="contain"/>
							<Text>{item.video_review}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

class TabScrollView extends Component {

	constructor(props,context){
		super(props)
	}

	static contextTypes = {
		Theme: PropTypes.string.isRequired,
		result: PropTypes.object.isRequired,
		// goDetail: PropTypes.func.isRequired,
	}

	checkRender = (video) => {
		const {navigator} = this.props
		if(video == undefined){
			return (
				<View><Text>数据拉取中</Text></View>
			)
		}
		return (
			video.map(item => <VideoCell navigator={navigator} item={item}/>)
		)
	}

	render = () => {
		let video = null
		if(this.context.result.result === undefined){
			video = undefined
		}else{
			video = this.context.result.result.video
		}
		return (
			<View>
				<View style={style.tabs}>
					<TabCell name="综合"/>
					<TabCell name="番剧"/>
					<TabCell name="UP主" num="2"/>
					<TabCell name="影视"/>
					<TabCell name="专题"/>
				</View>
				<ScrollView
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					style={{width:width,flexDirection:"row",flex:1,height:height-115}}
				>
					<View style={style.page}>
						<ScrollView style={{width:width}}>
							{this.checkRender(video)}
						</ScrollView>
					</View>
					<View style={style.page}>
						<ScrollView style={{width:width}}>
							<View style={{flex:1,height:1000,backgroundColor:"#00ccaa"}}>
								<Text>666</Text>
							</View>
						</ScrollView>
					</View>
					<View style={style.page}>
						<ScrollView style={{width:width}}>
							<View style={{flex:1,height:1000,backgroundColor:"#00ccaa"}}>
								<Text>555</Text>
							</View>
						</ScrollView>
					</View>
					<View style={style.page}>
						<ScrollView style={{width:width}}>
							<View style={{flex:1,height:1000,backgroundColor:"#00ccaa"}}>
								<Text>555</Text>
							</View>
						</ScrollView>
					</View>
					<View style={style.page}>
						<ScrollView style={{width:width}}>
							<View style={{flex:1,height:1000,backgroundColor:"#00ccaa"}}>
								<Text>555</Text>
							</View>
						</ScrollView>
					</View>
				</ScrollView>
			</View>
		)
	}
}

class SearchPage extends Component {
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
		const {rspSuccess,content} = this.props

		toggleSearch()
		fetch("http://bilibili-service.daoapp.io/search",{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `content=${content}&page=0&count=20`
		}).then(rsp => rsp.json())
			.then(rsp => rspSuccess(rsp))
			.catch(err => console.error(err))
	}

	static childContextTypes = {
		Theme: PropTypes.string.isRequired,
		result: PropTypes.object.isRequired,
		// goDetail: PropTypes.func.isRequired
	};

	getChildContext = () => {
		const {result,goDetail} = this.props
		return {
			Theme: setting[this.props.activeTheme],
			result: result,
			// goDetail: goDetail
		};
	};

	openSearch = () => {
		this.props.toggleSearch()
	}

	render() {
		let {navigator, activeTheme, isSearching} = this.props;
		if (Platform.OS === 'ios') {
			return (
				<View style={style.container}>
				</View>
			);
		} else {
			return (
				<View>
					<StatusBar
						backgroundColor={"#eaeaea"} />
					<View style={[style.container]}>
						<SearchTop searchContent="aa" navigator={navigator}/>
						<TabScrollView navigator={navigator}/>
					</View>
					<SearchScreen isShow={isSearching}/>
				</View>
			)
		}
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	header:{
		height: 55,
		backgroundColor:"#eaeaea"
	},
	wrapper:{
		flexDirection:"row",
		margin:5,
		backgroundColor:"#fff",
		borderRadius:2,
		borderColor:"#eee",
		borderWidth:StyleSheet.hairlineWidth * 2,
		justifyContent:"center",
		alignItems:"center",
		height:45
	},
	headIcon:{
		width:16,
		height:16,
	},
	leftArea:{
		width:30,
		height:30,
		justifyContent:"center",
		alignItems:"center",
	},
	input:{
		flex:1,
		// height:45,
		backgroundColor:"#fff",
		marginLeft:4,
		alignSelf:"center"
	},
	rightArea:{
		width:30,
		height:30,
		justifyContent:"center",
		alignItems:"center",
	},
	cell:{
		flex:1,
		backgroundColor:"#00bfff"
	},
	tabs:{
		flexDirection:"row",
		flex:1,
		backgroundColor:"#eaeaea",
		height:35,
	},
	tabTouch:{
		flex:1,
		// justifyContent:"center",
		alignItems:"center",
		// width: 70
	},
	tabBorder:{
		borderBottomColor:"#00bfff",
		borderBottomWidth:2,
		paddingBottom:8,
		marginTop:6
	},
	tabText:{

	},
	page:{
		width:width,
		backgroundColor:"#fff"
	},
	videoCell:{
		flexDirection:"row"
	},
	videoPic:{

	},
	rightContent:{
		flex:1
	},
	title:{
		height:35,
		overflow:"hidden"
	},
	author:{
		flexDirection:"row"
	},
	playTime:{
		flexDirection:"row"
	}
});

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	isSearching:state.search.isSearching,
	result:state.search.result
})

export default connect(mapStateToProps, {
	loadStorageSetting,
	toggleSearch,
	rspSuccess,
	// goDetail
})(SearchPage)
