/*
 * 关注页
 */
import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'

class AttentionPage extends Component {
	componentDidMount(){
		this.getMoviesFromApiAsync()
	}
  
	async getMoviesFromApiAsync() {
		const Url = "http://bilibili-service.daoapp.io/bangumi"
		let promise = await fetch(Url)
		let rsp = await promise.json()
		// console.info(rsp);
	}

	render = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.test}>
					该模块施工中
				</Text>
			</View>
		)
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
	}
});

export default AttentionPage
