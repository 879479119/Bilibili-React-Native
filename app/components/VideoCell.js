/**
 * Created by zi on 2016/9/7.
 */
import React, {Component, PropTypes} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

import {connect} from 'react-redux'

export default class VideoCell extends Component {

	componentDidMount(){

	}

	_goVideo = () =>{
		const {navigator} = this.context
		const param = parseInt(this.touch.props.aid)
		navigator.push({
			name: "VideoDetail",
			params:{
				aid:param
			}
		})
	}

	static contextTypes = {
		navigator: PropTypes.object.isRequired
	}

	render = () => {

		// const {pic, title, view, danmaku, aid} = this.props.item
		const {title, cover, param, play, danmaku} = this.props.item
		// this.param = param

		return (
			<View style={styles.container}>
				<TouchableHighlight style={{flex:1}} onPress={this._goVideo} ref={k => this.touch = k} aid={param}>
					<View style={styles.cell}>
						<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
						<View style={{height:38,overflow:"hidden",padding:5}}><Text style={{fontSize:13,color:"#333"}}>{title}</Text></View>
						<View style={styles.content}>
							<View style={styles.part}>
								<Image source={require("../resource/icons/ic_info_views.png")} style={{width:16,tintColor:"#aaa"}} resizeMode="contain"/>
								<Text style={styles.text}>{play}</Text>
							</View>
							<View style={styles.part}>
								<Image source={require("../resource/icons/ic_info_danmakus.png")} style={{width:16,tintColor:"#aaa"}} resizeMode="contain"/>
								<Text style={styles.text}>{danmaku}</Text>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}

export class FourCell extends Component {
	render = () => {
		const {items} = this.props

		return (
			<View>
				<View style={styles.row}>
					<VideoCell item={items[0]}/>
					<VideoCell item={items[1]}/>
				</View>
				<View style={styles.row}>
					<VideoCell item={items[2]}/>
					<VideoCell item={items[3]}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width: 160,
		height: 170,
		backgroundColor: "#fff",
		marginVertical:5
	},
	pic:{
		width: 160,
		height: 100
	},
	cell:{
	},
	content:{
		flexDirection:"row",
		marginTop: 3,
		padding:5
	},
	row:{
		flexDirection:"row",
		justifyContent:"space-between"
	},
	part:{
		flex:1,
		flexDirection:"row"
	},
	text:{
		fontSize:11,
		marginLeft:5
	}
})