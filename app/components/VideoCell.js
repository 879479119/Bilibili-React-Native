/**
 * Created by zi on 2016/9/7.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
// import {BoxShadow} from 'react-native-shadow'

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

		const {title, cover, param, play, danmaku} = this.props.item

		const shadowOpt = {
			width:160,
			height:170,
			border:2,
			radius:2,
			color:"#000",
			opacity:0.1,
			style:{marginVertical:5}
		}

		return (
				<TouchableHighlight style={styles.container} onPress={this._goVideo} ref={k => this.touch = k} aid={param}>
					<View style={styles.cell}>
						<Image source={{uri:cover}} style={styles.pic}/>
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
		)
	}
}

export class FourCell extends Component {
	render = () => {
		const {items} = this.props

		return (
			<View style={{position:"relative"}}>
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
		position:"relative",
		width: 160,
		height: 170,
		backgroundColor: "#fff",
		borderRadius:2,
		// marginVertical:20,
		overflow:"hidden"
	},
	pic:{
		width: 160,
		height: 100,
		borderTopLeftRadius:2,
		borderTopRightRadius:2
	},
	cell:{
	},
	content:{
		flexDirection:"row",
		marginTop: 3,
		padding:5
	},
	row:{
		position:"relative",
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