/*
 * 推荐页
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react'
import PropTypes from "prop-types"
//noinspection JSUnresolvedVariable
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Dimensions
} from 'react-native'
import {fetchBackSymbol} from 'redux-api-simple-middleware'
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
		const {cover, param} = this.props.items[0]
		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						<Image source={require('../resource/mipmaps/ic_header_topic.png')} style={styles.fieldIcon}/>
						<Text style={{marginLeft:5}}>话题</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.goin}>
							<Text style={{fontSize:10,color:"#fff"}}>进去看看</Text>
						</View>
					</TouchableHighlight>
				</View>
				<TouchableHighlight link={param} style={{marginTop:10}}>
					<Image source={{uri:cover}} style={styles.videoBanner}/>
				</TouchableHighlight>
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
							<Text>当前<Text style={{color:"#FF69B4"}}>{count}</Text>个直播</Text>
						</View>
					</TouchableHighlight>
				</View>
				<FourLiveCell items={items}/>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={styles.more}>
						<Text style={{fontSize:11}}>查看更多</Text>
					</View>
					<View style={{flexDirection:"row"}}>
						<Text style={{color:"#333",fontSize:9}}>9条新动态，点击刷新</Text>
						<Image source={require('../resource/icons/ic_category_more_refresh.png')} style={{width:16,height:16,tintColor:"#00bfff"}}/>
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
			<View style={{marginTop:20}}>
				<TouchableHighlight aid={param}>
					<Image source={{uri:cover}} style={styles.videoBanner}/>
				</TouchableHighlight>
			</View>
		)
	}
}
/**
 * 活动中心模块
 */
class ActivitySection extends Component {
	render = () => {
		const items = this.props.items
		return (
			<View style={styles.wrapper}>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{flexDirection:"row"}}>
						<Image source={require('../resource/mipmaps/ic_header_activity_center.png')} style={styles.fieldIcon}/>
						<Text style={{marginLeft:5}}>活动中心</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.goin}>
							<Text style={{fontSize:10,color:"#fff"}}>进去看看</Text>
						</View>
					</TouchableHighlight>
				</View>
				<ScrollView horizontal={true} style={{flex:1,marginTop:10}}>
					{items.map(item => {
						const {cover, param, title} = item
						return (
							<TouchableHighlight style={{width:170,marginRight:10}} link={param}>
								<View style={{flex:1,backgroundColor:"#fff"}}>
									<Image source={{uri: cover}} style={{width:170,height:100}}/>
									<View style={{padding:5,height:38,overflow:"hidden"}}>
										<Text style={{fontSize:12,color:"#333"}}>{title}</Text>
									</View>
								</View>
							</TouchableHighlight>
						)
					})}
				</ScrollView>
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
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
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
						<Text style={{marginLeft:5}}>{title}</Text>
					</View>
					<TouchableHighlight>
						<View style={styles.goin}>
							<Text style={{fontSize:10,color:"#fff"}}>进去看看</Text>
						</View>
					</TouchableHighlight>
				</View>
				<FourCell items={items}/>
				<View style={{flexDirection:"row",justifyContent:"space-between"}}>
					<View style={styles.more}>
						<Text style={{fontSize:11}}>查看更多</Text>
					</View>
					<View style={{flexDirection:"row"}}>
						<Text style={{color:"#333",fontSize:9}}>9条新动态，点这刷新</Text>
						<Image source={require('../resource/icons/ic_category_more_refresh.png')} style={{width:16,height:16,tintColor:"#00bfff"}}/>
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

	constructor(props){
		super(props)
	}

	static childContextTypes = {
		navigator:PropTypes.object.isRequired
	}

	getChildContext = () => {
		const {navigator} = this.props
		return {
			navigator: navigator
		}
	}

	componentDidMount(){
		const {fetchBackSymbol} = this.props
		this.loader = fetchBackSymbol('http://app.bilibili.com/x/show/old')
		this.banner = fetchBackSymbol('http://app.bilibili.com/x/banner?plat=4')
	}

	_goWebView = (item) => {
		const {navigator} = this.props
		const {type, value, title} = item
		console.info(item)
		if(type === 2){
			return () => {
				navigator.push({
					name: "WebView",
					params: {
						url: value,
						title: title
					}
				})
			}
		}else if(type === 0){
			return () => {
				navigator.push({
					name: "VideoDetail",
					params: {
						aid: value
					}
				})
			}
		}
	}

	render = () => {
		const {SAMfetchState, symbol, data} = this.props
		console.log('received:',data)
		if(SAMfetchState === 1){
			return (
				<View style={{backgroundColor:"#efefef"}}><Text>请求中</Text></View>
			)
		}else if(SAMfetchState === 2){

			if(symbol === this.loader){
				this.recommendData = Object.assign({}, data)
			}else if(symbol === this.banner){
				this.bannerData = Object.assign({}, data)
			}

			return (
				<ScrollView style={styles.scroller}>
					<SwiperView
						autoplay={true}
						showButtons={true}
						height={120}
						autoplayTimeout={10}
						paginationStyle={{bottom:0,marginLeft:300}}
						dot={<View style={styles.dot}/>}
						activeDot={<View style={styles.activeDot}/>}>
						{this.bannerData && this.bannerData.data.map(item => {
							const {type, image, value} = item
							return (
								<View style={{flex:1}}>
									<TouchableHighlight type={type} value={value} onPress={this._goWebView(item)}>
										<Image source={{uri:image}} style={{width:360,height:120}}><Text>{type}</Text></Image>
									</TouchableHighlight>
								</View>
							)
						})}
					</SwiperView>
					<View style={{paddingHorizontal:10}}>
						{
							this.recommendData && this.recommendData.result.map(item => {
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
									case "activity":
										return <ActivitySection items={items} head={head}/>
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
					</View>
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

const {width, height} = Dimensions.get('window')

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
		// flex: 1,
		marginTop:20
	},
	scroller:{
		flex: 1,
		backgroundColor: "#eaeaea",
		// paddingHorizontal: 10
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
		paddingVertical:3,
		justifyContent:"center",
		paddingHorizontal:20,
		backgroundColor:"#fff",
		borderRadius:4
	},
	back:{
		position:"relative",
		width:164,
		height:60
	},
	fore:{
		position:"absolute",
		top:10,
		left:30,
		width:100,
		height:40
	},
	videoBanner:{
		width:width - 20,
		height:104
	},
	goin:{
		paddingHorizontal:6,
		paddingVertical:3,
		backgroundColor:"#ccc",
		borderRadius:4
	},
	dot:{
		backgroundColor:'#fff',
		width: 6,
		height: 6,
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	activeDot:{
		backgroundColor: '#007aff',
		width: 6,
		height: 6,
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	}

})

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	SAMfetchState:state.SimpleAPIReducer.SAMfetchState,
	data:state.SimpleAPIReducer.data,
	symbol:state.SimpleAPIReducer.symbol
})

export default connect(mapStateToProps, {
	fetchBackSymbol
})(RecommendPage)
