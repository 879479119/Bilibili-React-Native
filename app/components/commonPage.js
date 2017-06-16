/**
 * Created by zi on 2016/8/3.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types"

import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableHighlight,
	Picker,
	Dimensions
} from 'react-native';
import setting from '../config/setting';
export default class common extends Component{
	constructor(props){
		super(props);
	}

	static contextTypes = {
		Theme: PropTypes.string.isRequired
	};

	componentDidMount(){

	}
	_backBtn(){
		this.props.navi.pop();
	}
	render(){
		//TODO:这里面还有一个选择排序的框框，把他做成传入参数拓展吧
		return(
			<View style={{flex:1}}>
				<View style={[style.header,{backgroundColor:this.context.Theme}]}>
					<View style={style.headerLeft}>
						<TouchableHighlight style={style.touchable} underlayColor={"#4197DB"} onPress={this._backBtn.bind(this)}>
							<Image source={require('../resource/icons/abc_ic_ab_back_mtrl_am_alpha.png')} style={{width:24,height:24}} />
						</TouchableHighlight>
						{this.props.topAddition}
					</View>
					<View style={style.headerRight}>
						<TouchableHighlight style={[style.touchable,{width:45,height:45,marginHorizontal:5,marginVertical:5}]} underlayColor={"#4CA3E9"} onPress={()=>{a = 0}}>
							<Image source={require('../resource/icons/abc_ic_search_api_mtrl_alpha.png')} style={{height:24,width:24}} />
						</TouchableHighlight>
						<TouchableHighlight style={[style.touchable,{width:40,height:45,marginVertical:5}]} underlayColor={"#4CA3E9"}  onPress={()=>{a = 0}} >
							<Image source={require('../resource/icons/abc_ic_menu_moreoverflow_mtrl_alpha.png')} style={{height:24,width:24}} />
						</TouchableHighlight>
					</View>
				</View>
				<View style={{flex:1,marginTop:55}}>
					{this.props.body}
				</View>
				{this.props.control}
			</View>
		);
	}
}


let w = Dimensions.get("window").width;

const style = StyleSheet.create({
	header:{
		width:w,
		position:"absolute",
		height:55,
		flexDirection:"row",
		backgroundColor:"#2196F3",
		justifyContent:"space-between"
	},
	headerLeft:{
		// width:55,
		height:55,
		flexDirection:"row"
	},
	headerRight:{
		flexDirection:"row"
	},
	touchable:{
		width:55,
		height:55,
		justifyContent:"center",
		alignItems:"center"
	},
	text:{
		marginHorizontal:10
	}
});
