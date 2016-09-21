/**
 * Created by zi on 2016/9/9.
 */
import React, {Component} from 'react'
//noinspection JSUnresolvedVariable
import{
	StyleSheet,
	View,
	StatusBar,
	WebView,
	Dimensions,
	TouchableHighlight,
	Image,
	Text
} from 'react-native'
import setting from '../config/setting'
import { connect } from 'react-redux'
import WebViewBridge from 'react-native-webview-bridge'

export function HandleBackPressInWebView(self) {

}

class WebViewPage extends Component {

	_backBtn = () => {
		// this.props.navigator.pop();
		console.info(this.browser.goBack());
	}

	componentDidMount(){

	}

	render(){
		const {url, title} = this.props
		const injectJS = ''
		const HTML = `
			<!DOCTYPE html>\n
			<html>
			  <head>
			    <title>Hello Static World</title>
			    <meta http-equiv="content-type" content="text/html; charset=utf-8">
			    <meta name="viewport" content="width=320, user-scalable=no">
			    <style type="text/css">
			      body {
			        margin: 0;
			        padding: 0;
			        font: 62.5% arial, sans-serif;
			        background: #ccc;
			      }
			      h1 {
			        padding: 45px;
			        margin: 0;
			        text-align: center;
			        color: #33f;
			      }
			    </style>
			  </head>
			  <body>
			    <h1>Hello Static World</h1>
			  </body>
			</html>`
		return(
			<View style={{flex:1}}>
				<View style={[style.header,{backgroundColor:setting[this.props.activeTheme]}]}>
					<TouchableHighlight style={style.touchable} underlayColor={"#4197DB"} onPress={this._backBtn}>
						<Image source={require('../resource/icons/abc_ic_ab_back_mtrl_am_alpha.png')} style={{width:24,height:24}} />
					</TouchableHighlight>
					<View style={{flex:1,height:50,alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
						<Text style={{fontSize:20,color:"#fff"}}>{title}</Text>
					</View>
					<View style={style.headerRight}>
						<TouchableHighlight style={[style.touchable,{width:40,height:45,marginVertical:5}]} underlayColor={"#4CA3E9"}>
							<Image source={require('../resource/icons/abc_ic_menu_moreoverflow_mtrl_alpha.png')} style={{height:24,width:24}} />
						</TouchableHighlight>
					</View>
				</View>
				<View style={{flex:1,marginTop:55}}>
					<WebViewBridge
						source={{html:HTML}}
						style={{flex:1,width:width}}
						ref={view => this.browser = view}/>
				</View>
			</View>
		);
	}
}

const {width, height} = Dimensions.get('window')

const style = StyleSheet.create({
	header:{
		width:width,
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
	},
	webview:{
		flex:1,
		height:10,
		width:width,
		backgroundColor:"#eee"
	}
});

const mapStatesToProps = (state) => ({
	activeTheme:state.common.activeTheme
})

export default connect(mapStatesToProps,{

})(WebViewPage)