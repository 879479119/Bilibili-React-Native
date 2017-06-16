/**
 * @description 左边的Drawer组件
 */
import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import PropTypes from "prop-types"

const Icon = [
	require("../resource/icons/ic_home_black_24dp.png"),
	require("../resource/icons/ic_file_download_black_24dp.png"),
	require("../resource/icons/ic_star_black_24dp.png"),
	require("../resource/icons/ic_history_black_24dp.png"),
	require("../resource/icons/ic_people_black_24dp.png"),
	require("../resource/icons/ic_account_balance_wallet_black_24dp.png"),
	require("../resource/icons/ic_color_lens_black_24dp.png"),
	require("../resource/icons/ic_shop_black_24dp.png"),
	require("../resource/icons/ic_settings_black_24dp.png")
]

class Cell extends Component {
	static contextTypes = {
		Theme: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	_press = (index) => {
		const {navi, handleSelected} = this.props
		handleSelected(index)
		switch (this.props.index) {
			case 1:
				navi.push({
					name: 'DownloadPage'
				})
				break
			case 6:
				navi.push({
					name: 'ThemePage'
				})
				break
			case 8:
				navi.push({
					name: 'SettingPage'
				})
				break
		}
	}

	render() {
		const {index, active} = this.props
		const isSelect = index === active
		const isNightTheme = this.context.Theme === '#3b3b3b'

		return (
				<View style={style.cell}>
					<TouchableHighlight
						underlayColor={"rgba(255,255,255,.4)"}
						style={
							isSelect ? [style.activeTouch, {backgroundColor: isNightTheme ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.1)'
							}] : style.touch}
						onPress={() => this._press(index)}>
						<View>
							<Image
								source={Icon[index]}
								style={isSelect ? [style.actIcon, {tintColor: this.context.Theme} ] :style.icon}/>
							<Text
								style={isSelect ? [style.activeText ,{color: this.context.Theme}]: [style.defaultText,{color: isNightTheme ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.6)'
								}]}>
								{this.props.name}
							</Text>
						</View>
					</TouchableHighlight>
				</View>
		)
	}
}

class list extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: 0
		}
	}

	static contextTypes = {
		Theme: PropTypes.string.isRequired
	}

	handleSelected = (index) => {
		this.setState({
			active: index
		})
	}

	render() {
		const {navi} = this.props
		const {active} = this.state
		const isNightTheme = this.context.Theme === '#3b3b3b'
		//TODO: 以后这里还是改成用Listview吧，现在只是觉得这几个项目没必要费工夫
		return (
			<View style={{backgroundColor: isNightTheme? '#3b3b3b' : '#fafafa'}}>
				<View>
					<Text>muy name is rocksama</Text>
				</View>
				<View style={[style.group,{borderBottomColor: isNightTheme? 'rgba(0,0,0,.4)': '#d9d9d9'}]}>
					<Cell
						name={"首页"}
						index={0}
						active={active}
						handleSelected={this.handleSelected}/>
					<Cell
						name={"离线缓存"}
						active={active}
						navi={navi}
						index={1}
						handleSelected={this.handleSelected}/>
				</View>
				<View style={[style.group,{borderBottomColor: isNightTheme? 'rgba(0,0,0,.4)': '#d9d9d9'}]}>
					<Cell name={"我的收藏"}
					      active={active}
					      index={2}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
					<Cell name={"历史记录"}
					      active={active}
					      index={3}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
					<Cell name={"关注的人"}
					      active={active}
					      index={4}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
					<Cell name={"我的钱包"}
					      active={active}
					      index={5}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
				</View>
				<View style={[{paddingVertical:10, borderBottomColor: isNightTheme? 'rgba(0,0,0,.4)': '#d9d9d9'},style.group]}>
					<Cell name={"主题选择"}
					      active={active}
					      index={6}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
					<Cell name={"应用推荐"}
					      active={active}
					      index={7}
					      navi={navi}
					      handleSelected={this.handleSelected}/>
					<Cell
						name={"设置与帮助"}
						active={active}
						index={8}
						navi={navi}
						handleSelected={this.handleSelected}/>
				</View>
			</View>
		)
	}
}

let style = StyleSheet.create({
	container: {
		backgroundColor: "#fafafa"
	},
	touch: {
		flex: 1,
		height: 45,
		paddingHorizontal: 15,
		justifyContent: "center"
		// alignItems:"center"
	},
	cell: {
		flexDirection: "row"
	},
	icon: {
		width: 25,
		height: 25,
		tintColor: "#7f7f7f"
	},
	group: {
		paddingVertical: 10,
		borderBottomWidth: .5,
	},
	activeTouch: {
		flex: 1,
		height: 45,
		paddingHorizontal: 15,
		justifyContent: "center",
	},
	defaultText: {
		marginLeft: 30,
		marginTop: 2
	},
	activeText: {
		marginLeft: 30,
		marginTop: 2,
		color: "rgba(255,255,255,.6)"
	},
	actIcon: {
		width: 25,
		height: 25
		// tintColor:"#4197DB"
	}
})

export default list
