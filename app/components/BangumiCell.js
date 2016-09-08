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

export default class BangumiCell extends Component {

	componentDidMount(){

	}

	render = () => {

		// const {pic, title, view, danmaku, aid} = this.props.item
		const {title, cover, param, desc1} = this.props.item

		return (
			<View style={styles.container}>
				<TouchableHighlight style={{flex:1}} aid={param}>
					<View>
						<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
						<Text style={{height:50}}>{title}</Text>
						<View style={styles.content}>
							<Text>{desc1}</Text>
							<Text>昨天23:23</Text>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}

export class FourBangumiCell extends Component {
	render = () => {
		const {items} = this.props

		return (
			<View>
				<View style={styles.row}>
					<BangumiCell item={items[0]}/>
					<BangumiCell item={items[1]}/>
				</View>
				<View style={styles.row}>
					<BangumiCell item={items[2]}/>
					<BangumiCell item={items[3]}/>
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