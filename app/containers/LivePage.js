/*
 * 直播页／首页
 */
import React, { Component} from 'react'
import PropTypes from "prop-types"

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {connect} from 'react-redux'
import { loadApiWithPath } from '../actions/api'

function loadData(props){
  props.loadApiWithPath('appindex')
}

class LivePage extends Component {

  componentWillMount(){
    loadData(this.props)
  }

  render() {
    const { appindex } = this.props

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

function mapStateToProps(state) {
	const {
		entities:	{ appindex },
	} = state;

	return {
    appindex: appindex.appindex
	}
}

export default connect(mapStateToProps,{
  loadApiWithPath
})(LivePage)
