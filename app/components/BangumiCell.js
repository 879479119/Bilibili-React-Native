/**
 * Created by zi on 2016/9/8.
 */
import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'
// import {BoxShadow} from 'react-native-shadow'
import {connect} from 'react-redux'

export default class BangumiCell extends Component {

	componentDidMount(){

	}

	render = () => {

		// const {pic, title, view, danmaku, aid} = this.props.item
		const {title, cover, param, desc1} = this.props.item
		const shadowOpt = {
			width:160,
			height:150,
			border:2,
			radius:2,
			color:"#000",
			opacity:0.1,
			style:{marginTop:10}
		}
		return (
				<TouchableHighlight style={styles.container} aid={param}>
					<View>
						<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
						<View style={{height:19,padding:5,overflow:"hidden"}}>
							<Text style={{fontSize:12,color:"#333"}}>{title}</Text>
						</View>
						<View style={styles.content}>
							<Text style={styles.text}>{desc1}</Text>
							<Text style={styles.text}>昨天23:23</Text>
						</View>
					</View>
				</TouchableHighlight>
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
		height: 150,
		backgroundColor:"#fff",
		borderRadius:2
	},
	pic:{
		width: 160,
		height: 100,
		borderTopLeftRadius:2,
		borderTopRightRadius:2
	},
	content:{
		flexDirection:"row",
		justifyContent:"space-between",
		padding:5,
		marginTop:5
	},
	row:{
		position:"relative",
		flexDirection:"row",
		justifyContent:"space-between"
	},
	text:{
		fontSize:11
	}
})