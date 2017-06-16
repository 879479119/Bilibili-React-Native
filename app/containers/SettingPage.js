/*
 * 设置页
 */

import React, {Component} from 'react'
import PropTypes from "prop-types"

import {
	StyleSheet,
	View,
	Text,
} from 'react-native'

class SettingPage extends Component {

	render = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.test}>
					设置页
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
	}
});

export default SettingPage
