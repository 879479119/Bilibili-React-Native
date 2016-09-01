/**
 * Created by zi on 2016/8/31.
 */
import React, {Component} from 'react'
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

import {readyRender} from '../actions/detail'

class VideoDetailPage extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount(){
		const {aid,readyRender} = this.props

		fetch(`http://bilibili-service.daoapp.io/view/${aid}`)
			.then(rsp => rsp.json())
			.then(rsp => readyRender(rsp))
			.catch(err => console.error(err))
	}

	componentWillReceiveProps = (nextProp) => {
	}

	_renderPage = data => {
		return (
			<View>
				<Text>{data.title}</Text>
			</View>
		)
	}

	render = () => {
		const {aid,result} = this.props
		console.info(result)
		if(result == undefined){
			return(
				<View style={style.container}>
					<Text>这个视频的AV号是{aid}</Text>
				</View>
			)
		}else{
			return(
				<View style={style.container}>
					<StatusBar translucent={true} backgroundColor={"transparent"}/>
					<View style={style.commonHeader}>
						<Image source={{uri:result.pic}} style={style.post} resizeMode="contain"/>
						<View style={style.topTools}>
							<View style={{flexDirection:"row"}}>
								<TouchableWithoutFeedback style={style.iconTouch}>
									<Image source={require('../resource/icons/abc_ic_ab_back_mtrl_am_alpha.png')} style={style.headIcon} />
								</TouchableWithoutFeedback>
								<Text style={{fillStyle:"bold",color:"#fff",fontSize:18}}>{aid}</Text>
							</View>
							<TouchableWithoutFeedback style={style.iconTouch}>
								<Image source={require('../resource/icons/abc_ic_menu_moreoverflow_mtrl_alpha.png')} style={style.headIcon} />
							</TouchableWithoutFeedback>
						</View>
					</View>
					<View style={style.tabs}>
						<Text>5656</Text>
					</View>
				</View>
			)
		}

	}

}

const mapStateToProps = state => ({
	aid: state.search.aid,
	result:state.detail.result
})

export default connect(mapStateToProps,{
	readyRender
})(VideoDetailPage)

const {width,height} = Dimensions.get("window")

const style = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#00caab",
		// height:100
	},
	commonHeader:{
		// height:100
	},
	post:{
		flex:1,
		width:width,
		height:226
	},
	topTools:{
		position:"absolute",
		top:50,
		left:20,
		flexDirection:"row",
		justifyContent:"space-between",
		width:width-40
	},
	iconTouch:{

	},
	headIcon:{
		width:24,
		height:24
	},
	tabs:{
		flex:1
	}
})