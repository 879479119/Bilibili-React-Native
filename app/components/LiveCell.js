/**
 * Created by zi on 2016/9/8.
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

export default class LiveCell extends Component {

	componentDidMount(){

	}

	render = () => {
		const {title, cover, param, area, up, online} = this.props.item

		return (
			<View style={styles.container}>
				<TouchableHighlight style={{flex:1}} aid={param}>
					<View>
						<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
						<Text style={{height:50}}><Text>#{area}#</Text>{title}</Text>
						<View style={styles.content}>
							<Text>{up}</Text>
							<Image source={require("../resource/icons/ic_info_danmakus.png")} style={{width:16,tintColor:"#ddd"}} resizeMode="contain"/>
							<Text>{online}</Text>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}

export class FourLiveCell extends Component {
	render = () => {
		const {items} = this.props

		return (
			<View>
				<View style={styles.row}>
					<LiveCell item={items[0]}/>
					<LiveCell item={items[1]}/>
				</View>
				<View style={styles.row}>
					<LiveCell item={items[2]}/>
					<LiveCell item={items[3]}/>
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