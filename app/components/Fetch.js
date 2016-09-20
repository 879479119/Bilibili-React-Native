import React, {PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import { API } from '../config'
import { receiveData } from '../actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

@connect(
  state => ({

  }),
  dispatch => bindActionCreators({receiveData}, dispatch)
)

export class Fetch extends React.Component {

  static PropTypes = {
    request: PropTypes.string.isRequired,
    children: PropTypes.object,
    style: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = async() => {
    const {request, url, reducer, receiveData} = this.props
    let response = await fetch(url, {...request, headers: this.getHeader()})
    let data = await response.json()
    receiveData(reducer, data)
  }

  getHeader = () => {
    const {request:{method}} = this.props
    switch (method) {
      case 'GET':
        return {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
        break
      case 'POST':
        return {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      default:
        return
    }
  }

  render() {
    const {children, style} = this.props
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}
