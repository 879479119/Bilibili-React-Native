import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	DrawerLayoutAndroid,
	Dimensions,
	TextInput,
	TouchableOpacity,
	Text,
	ToastAndroid,
  Platform
} from 'react-native'
import LivePage from './LivePage'
import RecommendPage from './RecommendPage'
import BangumiPage from './BangumiPage'
import SectionPage from './SectionPage'
import AttentionPage from './AttentionPage'
import DiscoveryPage from './DiscoveryPage'

import {connect} from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class MainPage extends Component {
  constructor (props){
    super(props)
  }

  render() {
    const {navigator} = this.props

    if(Platform.os === 'ios'){
      <View style={styles.container}>

      </View>
    } else {
      return (
        <View style={styles.container}>
        <ScrollableTabView
          tabBarActiveTextColor={'#fff'}
          tabBarInactiveTextColor={'#eee'}
          tabBarBackgroundColor={'#2196F3'}
          tabBarUnderlineColor={'#fff'}
          scrollWithoutAnimation={true}>
          <LivePage navigator={navigator} tabLabel="直播"/>
          <RecommendPage navigator={navigator} tabLabel="推荐"/>
          <BangumiPage navigator={navigator} tabLabel="番剧"/>
          <SectionPage navigator={navigator} tabLabel="分区"/>
          <AttentionPage navigator={navigator} tabLabel="关注"/>
          <DiscoveryPage navigator={navigator} tabLabel="发现"/>
        </ScrollableTabView>
      </View>
      )
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default MainPage
