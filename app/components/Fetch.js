import React, {PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import { API } from '../config'
import { loadDataList } from '../actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

@connect(
  state => ({}),
  dispatch => bindActionCreators({loadDataList}, dispatch)
)
export class Fetch extends React.Component {

  static PropTypes = {
    form: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    mode: PropTypes.object.isRequired,
    children: PropTypes.object,
    style: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    const {form, params, mode, loadDataList} = this.props
    loadDataList({form, params, mode})
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
