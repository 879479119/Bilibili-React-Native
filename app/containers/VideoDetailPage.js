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

class VideoDetailPage extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.info(this.props.aid)
	}
	componentWillReceiveProps = (nextProp) => {
		console.info(nextProp)
	}
	render = () => {
		const {aid} = this.props
		return(
			<View style={style.container}>
				<Text>这个视频的AV号是{aid}</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	aid:state.search.aid
})

export default connect(mapStateToProps,{

})(VideoDetailPage)

const style = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#00caab",
		height:100
	}
})