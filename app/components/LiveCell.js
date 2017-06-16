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

export default class LiveCell extends Component {

	componentDidMount(){

	}

	render = () => {
		const {title, cover, param, area, up, online} = this.props.item
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
			<TouchableHighlight style={styles.container} aid={param}>
				<View>
					<Image source={{uri:cover}} style={styles.pic} resizeMode="contain"/>
					<View style={{padding:5,height:38,overflow:"hidden"}}>
						<Text style={{fontSize:13}}><Text style={{color:"#FF69B4"}}>#{area}#</Text>{title}</Text>
					</View>
					<View style={styles.content}>
						<View style={styles.part}><Text style={{fontSize:11}}>{up}</Text></View>
						<View style={styles.part}>
							<Image source={require("../resource/icons/ic_watching.png")} style={{width:12,tintColor:"#aaa"}} resizeMode="contain"/>
							<Text style={{fontSize:11,marginLeft:5}}>{online}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
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
		height: 170,
		backgroundColor: "#fff",
		borderRadius:2
		// marginVertical:5
	},
	pic:{
		width: 160,
		height: 100,
		borderTopLeftRadius:2,
		borderTopRightRadius:2
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
		position:"relative",
		flexDirection:"row",
		flex:1,
		overflow:"hidden"
	}
})