/*
 * 下载页
 */
import React, {Component, PropTypes} from 'react'
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
import Svg,{ Circle,Rect,Defs,Ellipse,LinearGradient,Stop,RadialGradient,Path } from 'react-native-svg'
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
	render(){
		let lineWidth = 20,
			radius = 5,
			rectWidth = 100,
			rectHeight = 50
		return (
			<View style={{backgroundColor:"#eaeaea",flex:1,justifyContent:"center",alignItems:"center"}}>
				<Svg height="150" width="300">
					<Defs>
						<LinearGradient id="top" x1="0" y1={lineWidth} x2="0" y2="0">
							<Stop offset="0" stopColor="rgba(0,0,0,0.5)" stopOpacity="0.2" />
							<Stop offset="1" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
						</LinearGradient>
						<LinearGradient id="bottom" x1="0" y1={rectHeight+lineWidth+2*radius} x2="0" y2={rectHeight+2*lineWidth+2*radius}>
							<Stop offset="0" stopColor="rgba(0,0,0,0.5)" stopOpacity="0.2" />
							<Stop offset="1" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
						</LinearGradient>
						<LinearGradient id="left" x1={lineWidth} y1="0" x2="0" y2="0">
							<Stop offset="0" stopColor="rgba(0,0,0,0.5)" stopOpacity="0.2" />
							<Stop offset="1" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
						</LinearGradient>
						<LinearGradient id="right" x1={rectWidth+lineWidth+2*radius} y1="0" x2={rectWidth+lineWidth*2+2*radius} y2={0}>
							<Stop offset="0" stopColor="rgba(0,0,0,0.5)" stopOpacity="0.2" />
							<Stop offset="1" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
						</LinearGradient>
						<RadialGradient id="border" r={lineWidth} cx={lineWidth} cy={lineWidth}>
							<Stop offset="0" stopColor="rgba(0,0,0,0.5)" stopOpacity="0.2" />
							<Stop offset="1" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
						</RadialGradient>
					</Defs>
					<Path d={`M 0 ${lineWidth+radius},Q 0 0 ${lineWidth+radius} 0,v ${lineWidth},q ${-radius} 0 ${-radius} ${radius},h ${-lineWidth},z`} fill="url(#border)"/>
					<Path d={`M ${rectWidth+lineWidth+radius} 0,q ${lineWidth+radius} 0 ${lineWidth+radius} ${lineWidth+radius},h ${-lineWidth},q 0 ${-radius} ${-radius} ${-radius},v ${-lineWidth},z`} fill="#fff"/>
					<Path d={`M ${rectWidth+lineWidth+2*radius} ${rectHeight+lineWidth+radius},h ${lineWidth},q 0 ${lineWidth+radius} -${lineWidth+radius} ${lineWidth+radius},v ${-lineWidth},q ${radius} 0 ${radius} ${-radius},z`} fill="#fff"/>
					<Path d={`M 0 ${rectHeight+lineWidth+radius},q 0 ${lineWidth+radius} ${lineWidth+radius} ${lineWidth+radius},v ${-lineWidth},q ${-radius} 0 ${-radius} ${-radius},h ${-lineWidth},z`} fill="#fff"/>
					<Rect x={lineWidth+radius} y="0" width={rectWidth} height={lineWidth} fill="url(#top)" />
					<Rect x="0" y={lineWidth+radius} width={lineWidth} height={rectHeight} fill="url(#left)" />
					<Rect x={rectWidth+lineWidth+2*radius} y={lineWidth+radius} width={lineWidth} height={rectHeight} fill="url(#right)" />
					<Rect x={lineWidth+radius} y={rectHeight+lineWidth+2*radius} width={rectWidth} height={lineWidth} fill="url(#bottom)" />
				</Svg>
			</View>
		)
		return (
			<View style={{backgroundColor:"#eaeaea",flex:1,justifyContent:"center",alignItems:"center"}}>
				<Image source={require('../resource/pages/img_tips_error_no_downloads.png')} style={{height:120}} resizeMode="contain"/>
				<Text style={{color:"#9b9b9b"}}>没有找到你的缓存哟</Text>
			</View>
		);
	}
}

class DownloadPage extends Component{

	static childContextTypes = {
		Theme: React.PropTypes.string.isRequired
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
