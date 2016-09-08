/*
 * 推荐页
 */

import React, {Component, PropTypes} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native'
import SwiperView from 'react-native-swiper'
import setting from '../config/setting';
import {connect} from 'react-redux'
import {loadWithAPI} from '../actions/network'
import {VideoCell, FourCell} from '../components/VideoCell'
import {FourLiveCell} from '../components/LiveCell'
import {FourBangumiCell} from '../components/BangumiCell'
/**
 * 话题模块
 */
class TopicSection extends Component {
	render = () => {
		const {title} = this.props.head
		return (
			<View>
				<Text>{title}</Text>
			</View>
		)
	}
}
/**
 * 直播模块
 */
class LiveSection extends Component {
	render = () => {
		const {count} = this.props.head
		const items = this.props.items
		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						<Image source={require('../resource/mipmaps/ic_head_live.png')} style={styles.fieldIcon}/>
						<Text>正在直播</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.rank}>
							<Text>当前<Text>{count}</Text>个直播</Text>
						</View>
					</TouchableHighlight>
				</View>
				<FourLiveCell items={items}/>
				<View style={{flexDirection:"row"}}>
					<View style={styles.more}>
						<Text>查看更多</Text>
					</View>
					<View>
						<Text>9条新动态，点击刷新</Text>
					</View>
				</View>
			</View>
		)
	}
}
/**
 * 长条视频的模块
 */
class VideoSection extends Component {
	render = () => {
		const {cover, param} = this.props.items[0]
		return (
			<View>
				<TouchableHighlight aid={param}>
					<Image source={{uri:cover}} style={styles.videoBanner} resizeMode="contain"/>
				</TouchableHighlight>
			</View>
		)
	}
}
/**
 * 番剧
 */
class BangumiSection extends Component {
	render = () => {
		const items = this.props.items

		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						<Image source={require('../resource/mipmaps/ic_category_t13.png')} style={styles.fieldIcon}/>
						<Text>番剧推荐</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.rank}>
							<Text>更多</Text>
						</View>
					</TouchableHighlight>
				</View>
				<FourBangumiCell items={items}/>
				<View style={{flexDirection:"row"}}>
					<TouchableOpacity activeOpacity={0.9}>
						<View>
							<Image source={require('../resource/backgrounds/bangumi_timeline_background.png')} style={styles.back} resizeMode="contain"/>
							<Image source={require('../resource/icons/bangumi_timeline_text.png')} style={styles.fore} resizeMode="contain"/>
						</View>

					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9}>
						<View>
							<Image source={require('../resource/backgrounds/bangumi_index_background.png')} style={styles.back} resizeMode="contain"/>
							<Image source={require('../resource/icons/bangumi_index_text.png')} style={styles.fore} resizeMode="contain"/>
						</View>

					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
/**
 * 获取模块前面的图标
 */
class RegionIcons {
	static getIcon(param){
		param = parseInt(param)
		switch (param){
			case 3:// music
				return <Image source={require('../resource/mipmaps/ic_category_t3.png')} style={styles.fieldIcon}/>
			case 129://dance
				return <Image source={require('../resource/mipmaps/ic_category_t129.png')} style={styles.fieldIcon}/>
			case 4://game
				return <Image source={require('../resource/mipmaps/ic_category_t4.png')} style={styles.fieldIcon}/>
			case 119://yooooooooooooo
				return <Image source={require('../resource/mipmaps/ic_category_t119.png')} style={styles.fieldIcon}/>
			case 36://science
				return <Image source={require('../resource/mipmaps/ic_category_t36.png')} style={styles.fieldIcon}/>
			case 160://relax
				return <Image source={require('../resource/mipmaps/ic_category_t160.png')} style={styles.fieldIcon}/>
			case 155://fashion
				return <Image source={require('../resource/mipmaps/ic_category_t155.png')} style={styles.fieldIcon}/>
			case 5://entertainment
			    return <Image source={require('../resource/mipmaps/ic_category_t5.png')} style={styles.fieldIcon}/>
			case 11://TV
				return <Image source={require('../resource/mipmaps/ic_category_t11.png')} style={styles.fieldIcon}/>
			case 23://movie
				return <Image source={require('../resource/mipmaps/ic_category_t23.png')} style={styles.fieldIcon}/>
		}
	}
}
/**
 * 动画区，舞蹈区等公有模块
 */
class CommonSection extends Component {
	render = () => {
		const {title, param} = this.props.head
		const items = this.props.items
		const icon = RegionIcons.getIcon(param)
		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						{icon}
						<Text>{title}</Text>
					</View>
					<TouchableHighlight>
						<Text>进去看看</Text>
					</TouchableHighlight>
				</View>
				<FourCell items={items}/>
				<View style={{flexDirection:"row"}}>
					<View style={styles.more}>
						<Text>查看更多</Text>
					</View>
					<View>
						<Text>9条新动态，点击刷新</Text>
					</View>
				</View>
			</View>
		)
	}
}
/**
 * 推荐模块
 */
class RecommendSection extends Component {

	render = () => {
		const {items} = this.props

		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						<Image source={require('../resource/mipmaps/ic_category_promo.png')} style={styles.fieldIcon}/>
						<Text>热门推荐</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.rank}>
							<Image source={require('../resource/icons/ic_header_indicator_rank.png')} style={styles.fieldIcon}/>
							<Text>排行榜</Text>
						</View>
					</TouchableHighlight>
				</View>
				<FourCell items={items}/>
			</View>
		)
	}
}
/**
 * 推荐页面控制组件
 */
class RecommendPage extends Component {

	componentDidMount(){
		const {loadWithAPI} = this.props
		this.loader = loadWithAPI('http://app.bilibili.com/x/show/old')
	}

	render = () => {
		const {fetchState, symbol, recommend} = this.props
		if(fetchState == 1){
			return (
				<View style={{backgroundColor:"#efefef"}}><Text>请求中</Text></View>
			)
		}else if(fetchState == 2 && symbol == this.loader){
			return (
				<ScrollView style={styles.scroller}>
					<SwiperView autoplay={true} showButtons={true} height={100}>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
					</SwiperView>
					{
						recommend.result.map(item => {
							const items = item.body,
								head = item.head
							switch (item.type){
								case "recommend":
									return <RecommendSection items={items} head={head}/>
								case "live":
									return <LiveSection items={items} head={head}/>
								case "bangumi_2":
									return <BangumiSection items={items} head={head}/>
								case "region":
									return <CommonSection items={items} head={head}/>
								case "weblink":
									return <TopicSection items={items} head={head}/>
								case undefined:
									return <VideoSection items={items} head={head}/>
								default:
									return (
										<View>
											<Text>暂时不支持显示</Text>
										</View>
									)
							}
						})
					}
				</ScrollView>
			)
		}else {
			return (
				<View style={styles.container}>
					<Text style={styles.test}>
						该模块施工中
					</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EFF1F0'
	},
	test: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	wrapper:{
		flex: 1,

	},
	scroller:{
		flex: 1,
		backgroundColor: "#00bfff",
		// height: 50
	},
	rank:{
		flexDirection:"row"
	},
	fieldIcon:{
		width: 20,
		height: 20
	},
	row:{
		flexDirection:"row"
	},
	more:{
		width:80,
		height:30,
		textAlign:"center",
		justifyContent:"center"
	},
	back:{
		position:"relative",
		width:160,
		height:80
	},
	fore:{
		position:"absolute",
		top:10,
		left:20,
		width:120,
		height:40
	},
	videoBanner:{
		width:360,
		height:100
	}
});

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	fetchState:state.netReducer.fetchState,
	recommend:state.netReducer.recommend,
	symbol:state.netReducer.symbol
})

export default connect(mapStateToProps, {
	loadWithAPI
})(RecommendPage)
