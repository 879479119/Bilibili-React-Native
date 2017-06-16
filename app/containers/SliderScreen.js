/*
 * 抽屉视图
 */

import React, {Component} from 'react'
import PropTypes from "prop-types"

//noinspection JSUnresolvedVariable
import {
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	AsyncStorage
} from 'react-native'
import {connect} from 'react-redux'

import List from '../components/SiderList'

import {handleThemeChange} from '../actions/common'
import setting from '../config/setting'

class SliderScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bilibili: true
		}
	}

	static childContextTypes = {
		Theme: PropTypes.string.isRequired
	};

	getChildContext = () => {
		return {
			Theme: setting[this.props.activeTheme]
		}
	}
	_switchTheme = () => {
		const {handleThemeChange, activeTheme, settingTheme} = this.props;
		if (activeTheme === 'night') {
			handleThemeChange('activeTheme',settingTheme,)
		} else {
			handleThemeChange('activeTheme','night')
		}
	};

	_changeBili = () => {
		this.setState({bilibili: !this.state.bilibili})
	};

	render() {
		const {navigator, activeTheme} = this.props;
		return (
			<View style={[style.container,{backgroundColor: activeTheme === 'night' ? '#3b3b3b' : '#fafafa'}]}>
				<View style={[style.top,{backgroundColor: setting[activeTheme]}]}>
					<View style={style.left}>
						<TouchableWithoutFeedback style={style.faceTouch}>
							<View style={style.faceBorder}>
								<Image resizeMode={Image.resizeMode.contain} source={require('../resource/pages/face.jpg')}
								       style={{borderRadius:35,width:70,height:70}}/>
							</View>
						</TouchableWithoutFeedback>
						<View style={style.user}>
							<Text style={{color:"#ffffff",fontSize:14}}>磊磊SAMA</Text>
							<View
								style={{borderWidth:1,borderRadius:2,borderColor:"#ffffff",width:20,height:12,justifyContent:"center",alignItems:"center",marginTop:4,marginLeft:4}}>
								<Text style={{color:"#ffffff",fontSize:8}}>LV4</Text>
							</View>
							<Image
								resizeMode="contain"
								style={{width:14,height:14,marginLeft:4,marginTop:3}}
								source={require('../resource/icons/ic_user_male_border.png')}/>
						</View>
						<View style={style.status}>
							<Text
								style={{color:setting[activeTheme] ,fontSize:8,alignItems:"center",justifyContent:"center"}}>正式会员</Text>
						</View>
						<Text style={{color:'rgba(255,255,255,0.6)',fontSize:14}}>硬币 : 297.1</Text>
					</View>
					<View style={style.wrapper}>
						<TouchableWithoutFeedback
							onPressIn={()=> this._changeBili()}
							onPressOut={()=> this._changeBili()}>
							<View>
								<Image resizeMode={"contain"} style={{width:180,opacity:this.state.bilibili?1:0}}
								       source={require('../resource/pages/bili_drawerbg_logined.png')}/>
								<Image resizeMode={"contain"}
								       style={{width:180,marginTop:-278,opacity:this.state.bilibili?0:1}}
								       source={require('../resource/pages/bili_drawerbg_not_logined.png')}/>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={style.notification}>
						<TouchableOpacity onPress={()=> this._switchTheme()}>
							<Image resizeMode={"contain"} style={{width:35,height:35}}
							       source={require('../resource/icons/ic_navigation_header_notification.png')}/>
						</TouchableOpacity>
					</View>
					<View style={style.mode}>
						<TouchableOpacity onPress={()=> this._switchTheme()}>
							<Image resizeMode={"contain"} style={{width:35}}
							       source={require('../resource/icons/ic_switch_night.png')}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={style.body}>
					<List navi={this.props.navigator}/>
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		backgroundColor: "#2196F3",
		height: 165
	},
	left: {
		marginVertical: 15,
		marginHorizontal: 15,
		position: "relative"
	},
	user: {
		flexDirection: "row",
		marginTop: 10
	},
	faceTouch: {},
	faceBorder: {
		borderRadius: 36,
		justifyContent: "center",
		width: 72,
		height: 72,
		backgroundColor: "#ffffff"
	},
	status: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255,255,255,.6)",
		width: 42,
		height: 13,
		borderRadius: 10,
		marginVertical: 3
	},
	wrapper: {
		opacity: 0.2,
		marginTop: -215,
		marginLeft: 80
	},
	notification: {
		width: 35,
		height: 35,
		marginTop: -217,
		marginLeft: 150
	},
	mode: {
		width: 35,
		height: 35,
		marginTop: -53,
		marginLeft: 205
	}
});

function mapStateToProps(state) {
	const {
		common:{activeTheme ,settingTheme},
	} = state;
	return {
		activeTheme,
		settingTheme
	}
}

export default connect(mapStateToProps, {
	handleThemeChange
})(SliderScreen)
