/*
 * 下载页
 */
import React, {Component} from 'react'
import PropTypes from "prop-types"

import setting from '../config/setting';
//noinspection JSUnresolvedVariable
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableHighlight,
	Picker,
} from 'react-native'
import Common from '../components/commonPage'
import {connect} from 'react-redux'

class DownPicker extends Component{
	constructor(props){
		super(props);
		this.state = {select:0,value:"title"};
	}
	render(){
		return (
			<View style={{backgroundColor:"#000"}}>
				<Picker
					style={{color:"#ffffff",backgroundColor:"#2196F3"}}
					onValueChange={(val,index)=>{this.setState({select:index,value:val})}}
					mode="dropdown"
					selectedValue={this.state.value}>
					<Picker.Item label="按标题" value="title"/>
					<Picker.Item label="按时间" value="time"/>
					<Picker.Item label="按剧集" value="series"/>
				</Picker>
			</View>
		);
	}
}

class Control extends Component{
	render(){
		return (
			<View style={{height:60}}>
				<View style={{backgroundColor:"#2196F3",alignItems:"center",height:20,flexDirection:"row"}}>
					<View style={{backgroundColor:"#aaaaaa",height:20,width:160,position:"absolute",right:0}}>
					</View>
					<Text style={{color:"#333333",width:200,fontSize:12,left:10}}>主存储: 30.4GB / 可用: 18.7GB</Text>
				</View>
				<View style={{height:40,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
					<View style={{alignItems:"center",flexDirection:"row"}}>
						<View style={{borderRightColor:"#aaaaaa",borderRightWidth:1}}>
							<Text style={{marginHorizontal:10}}>全部开始</Text>
						</View>
						<Text style={{marginHorizontal:10}}>编辑</Text>
					</View>
					<View style={{right:10}}>
						<Image source={require('../resource/icons/ic_action_download_refresh.png')} style={{width:18,height:18}}/>
					</View>
				</View>
			</View>
		);
	}
}

class Empty extends Component{
	render = () => {
		return (
			<View style={{backgroundColor:"#eaeaea",flex:1,justifyContent:"center",alignItems:"center"}}>
				<Image source={require('../resource/pages/img_tips_error_no_downloads.png')} style={{height:120}} resizeMode="contain"/>
				<Text style={{color:"#9b9b9b"}}>没有找到你的缓存哟</Text>
			</View>
		)
	}
}

class DownloadPage extends Component{

	static childContextTypes = {
		Theme: PropTypes.string.isRequired
	};

	getChildContext = () => {
		return {
			Theme: setting[this.props.activeTheme]
		};
	};

	render(){
		return (
			<Common
				navi={this.props.navigator}
				topAddition={<DownPicker/>}
				body={<Empty/>}
				control={<Control/>}
			/>
		);
	}
}


function mapStateToProps(state) {
	const {
		common:	{activeTheme},
	} = state;
	return {
		activeTheme
	}
}

export default connect(mapStateToProps)(DownloadPage)
