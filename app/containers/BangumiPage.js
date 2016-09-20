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
import {baseAPI} from '../config'

@connect(
  state => {
    const {bangumi} = state
    return {
      bangumi
    }
  }
)
export default class BangumiPage extends Component {

  render() {
    const {bangumi} = this.props

    return (
      <Fetch url={`${baseAPI}/bangumi`} request={{method: 'GET'}} reducer={'bangumi'} style={styles.container}>
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
