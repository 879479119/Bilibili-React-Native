/*
 * 推荐页
 */

import React, {Component, PropTypes} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView
} from 'react-native'
import SwiperView from 'react-native-swiper'
import setting from '../config/setting';
import {connect} from 'react-redux'
import {loadWithAPI} from '../actions/network'





class RecommendPage extends Component {

	componentDidMount(){
		const {loadWithAPI} = this.props
		this.loader = loadWithAPI('http://app.bilibili.com/x/show/old')
	}

	static childContextTypes = {
		Theme: React.PropTypes.string.isRequired,
		fetchState: React.PropTypes.number.isRequired,
		symbol: React.PropTypes.object.isRequired
	};

	getChildContext = () => {
		const {fetchState, symbol} = this.props;
		return {
			Theme: setting[this.props.activeTheme],
			fetchState: fetchState,
			symbol: symbol
		}
	};

	render = () => {
		const {fetchState, symbol, recommend} = this.props
		if(fetchState == 1){
			return (
				<View style={{backgroundColor:"#efefef"}}><Text>请求中</Text></View>
			)
		}else if(fetchState == 2 && symbol == this.loader){
			return (
				<ScrollView style={styles.scroller}>
					<SwiperView autoplay={true} showButtons={true} height={100}>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
						<View style={{flex:1,backgroundColor:"#eee"}}><Text>45566</Text></View>
					</SwiperView>
				</ScrollView>
			)
		}else {
			return (
				<View style={styles.container}>
					<Text style={styles.test}>
						该模块施工中
					</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EFF1F0'
	},
	test: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	scroller:{
		flex: 1,
		backgroundColor: "#00bfff",
		// height: 50
	}
});

const mapStateToProps = (state) => ({
	activeTheme:state.common.activeTheme,
	fetchState:state.netReducer.fetchState,
	recommend:state.netReducer.recommend,
	symbol:state.netReducer.symbol
})

export default connect(mapStateToProps, {
	loadWithAPI
})(RecommendPage)
