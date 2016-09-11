/**
 * @author Rock
 * @description 主页上的搜索页面
 */
import React, {Component} from 'react'
//noinspection JSUnresolvedVariable
import {
	View,
	StyleSheet,
	DrawerLayoutAndroid,
	Dimensions,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	Text,
	Image,
	ToastAndroid,
	Platform,
	StatusBar,
	TouchableWithoutFeedback,
	LayoutAnimation
} from 'react-native'
import {connect} from 'react-redux'
import {setSearchHistory,getSearchHistory,cleanSearchHistory,toggleSearch} from '../actions/search';

import SearchPage from './SearchPage'

const {width,height} = Dimensions.get("window");

//TODO:这里有一个BUG，在高分屏中input框不会居中

/**
 * @return {boolean}
 */
export function HandleBackPressWhenSearch(self){
	const {toggleSearch, isSearching} = self.props
	if(isSearching){
		toggleSearch()
		return true
	}
	return false
}

class SearchScreen extends Component{
	constructor(props) {
	  super(props)

	}

	//最大显示条目数
	static showCountMax = parseInt((height - 120) / 38)

	static defaultProps = {
		isShow: false
	}

	componentDidMount(){
		//初始化，获取历史记录
		this._getHistory()
	}

	_cleanHistory = () => {
		const {cleanSearchHistory} = this.props
		cleanSearchHistory()
	}

	_getHistory = () => {
		const {getSearchHistory} = this.props
		getSearchHistory();
	}

	_setHistory = () => {
		const {setSearchHistory,searchHistory,toggleSearch} = this.props
		this.textValue && setSearchHistory(searchHistory,this.textValue)
		//设置搜索历史后进行页面跳转
		this.textValue && this._goSearch()
	}

	_hide = () => {
		this.props.toggleSearch();
	}

	_changeContent = arg => {
		const self = this
		//通过高阶函数传递参数进行搜索
		return () => {
			self.textValue = arg
			self._goSearch()
		}
	}

	_goSearch = () => {
		// TODO: go to the search page with an argument <content>
		const {navigator,toggleSearch} = this.props
		toggleSearch()
		navigator.push({
			component: SearchPage,
			params:{
				content:this.textValue
			}
		})
	}

	render(){
		const {isShow, searchHistory, toggleSearch} = this.props

		if(isShow === false) {
			return null
		}
		let showHistory = [];

		for(let i = 0;i < searchHistory.length; i ++){
			showHistory[i] = searchHistory[searchHistory.length - 1 - i]
		}
		return(
			<TouchableOpacity style={style.mask} onPressIn={() => toggleSearch()}>
				<View style={style.searchBox}>
					<TouchableHighlight onPress={this._hide}>
						<Image source={require("../resource/icons/ic_arrow_back_black.png")} style={style.headIcon}/>
					</TouchableHighlight>
					<TouchableHighlight>
						<Image source={require("../resource/icons/ic_scan.png")} style={style.headIcon}/>
					</TouchableHighlight>
					<TextInput autoFocus={true} onChangeText={value => this.textValue = value} style={style.input} placeholder="搜索视频、番剧、up主或av号"/>
					<TouchableHighlight onPress={this._setHistory}>
						<Image source={require("../resource/icons/ic_search_query.png")} style={style.searchIcon}/>
					</TouchableHighlight>
				</View>
				<View style={style.searchHistory}>
					{showHistory.map((item,index)=> {
						if (index < SearchScreen.showCountMax) {
							let self = this
							return (
								<TouchableHighlight onPress={(arg => self._changeContent(arg))(item)}>
									<View style={style.historyRow}>
										<Image source={require("../resource/icons/ic_search_history.png")}
										       style={style.historyIcon}/>
										<Text style={style.historyText}>{item}</Text>
									</View>
								</TouchableHighlight>
							);
						}
					})}
					{searchHistory.length ? (
						<TouchableWithoutFeedback onPress={this._cleanHistory}>
							<View style={style.cleanHistory}>
								<Text style={{justifyContent:"center"}}>清除搜索记录</Text>
							</View>
						</TouchableWithoutFeedback>
						):undefined}
				</View>
			</TouchableOpacity>
		);
	}
}

const style = StyleSheet.create({
	mask:{
		position:"absolute",
		width:width,
		height:height,
		top:0,
		left:0,
		backgroundColor:"rgba(0,0,0,0.2)",
	},
	searchBox:{
		width:width - 8,
		height:45,
		backgroundColor:"rgba(255,255,255,1)",
		marginLeft:4,
		marginTop:4,
		flexDirection:"row",
		alignItems:"center"
	},
	saerchHistory:{

	},
	headIcon:{
		width:18,
		height:18,
		marginLeft:16,
		// marginTop:12
	},
	input:{
		flex:1,
		// height:45,
		backgroundColor:"#fff",
		marginLeft:4,
		alignSelf:"center"
	},
	searchIcon:{
		width:28,
		height:28,
		// marginTop:8,
		marginRight:8
	},
	searchHistory:{
		width:width - 8,
		marginLeft:4,
		backgroundColor:"#fff",
		borderTopColor:"rgb(205,205,205)",
		borderTopWidth:StyleSheet.hairlineWidth
	},
	historyRow:{
		flexDirection:"row",
		marginLeft:10,
		marginVertical:6,
		alignItems:"center"
	},
	historyIcon:{
		width:26,
		height:26
	},
	historyText:{
		color:"#222",
		marginLeft:10,
		fontSize:13
	},
	cleanHistory:{
		height:40,
		flex:1,
		alignItems:"center",
		justifyContent:"center",
	}
})

function mapStateToProps(state) {
	const {
		search:	{searchHistory},
	} = state;
	return {
		searchHistory,
	}
}

export default connect(mapStateToProps, {
	setSearchHistory,
	getSearchHistory,
	cleanSearchHistory,
	toggleSearch
})(SearchScreen)
