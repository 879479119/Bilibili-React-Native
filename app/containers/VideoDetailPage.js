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
		console.info(this.props)
		console.info(this.props.params)
	}
	componentWillReceiveProps = (nextProp) => {
		console.info(nextProp)
	}
	render = () => {
		return(
			<View style={style.container}>
				<Text>123332131</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
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