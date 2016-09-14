/*
 * 番剧页
 */
import React, { Component, PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {connect} from 'react-redux'
import {Fetch} from '../components'

export default class BangumiPage extends Component {

  render() {
    return (
      <Fetch form="search" params={{content:'haha',page: 0}} style={styles.container}>
        <Text style={styles.test}>
          该模块施工中
        </Text>
      </Fetch>
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
})
