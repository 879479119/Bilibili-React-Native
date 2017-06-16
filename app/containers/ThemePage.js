/*
 * 主题页
 */

import React, {Component} from 'react'
import PropTypes from "prop-types"

import {
	StyleSheet,
	View,
	Text,
} from 'react-native'

class ThemePage extends Component {
	render = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.test}>
					主题页
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

export default ThemePage
