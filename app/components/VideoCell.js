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

	render = () => {

		// const {pic, title, view, danmaku, aid} = this.props.item
		const {title, cover, param, play, danmaku} = this.props.item

		return (
			<View style={styles.container}>
				<TouchableHighlight style={{flex:1}} aid={param}>
					<View>
						<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
						<Text style={{height:50}}>{title}</Text>
						<View style={styles.content}>
							<Image source={require("../resource/icons/ic_info_views.png")} style={{width:16,tintColor:"#ddd"}} resizeMode="contain"/>
							<Text>{play}</Text>
							<Image source={require("../resource/icons/ic_info_danmakus.png")} style={{width:16,tintColor:"#ddd"}} resizeMode="contain"/>
							<Text>{danmaku}</Text>
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
		height: 180
	},
	pic:{
		width: 160,
		height: 100
	},
	content:{
		flexDirection:"row",

	},
	row:{
		flexDirection:"row"
	}
})