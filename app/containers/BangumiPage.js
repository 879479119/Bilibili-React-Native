/*
 * 番剧页
 */
import React, { Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {connect} from 'react-redux'
import { loadApiWithPath } from '../actions/api'

function loadData(props){
  props.loadApiWithPath('bangumi')
}

class BangumiPage extends Component {

  componentDidMount(){
    loadData(this.props)
  }

  render() {
    const {bangumi} = this.props
    // console.info(bangumi)
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
		entities: { bangumi },
	} = state;

	return {
		Theme:state.common.Theme,
        bangumi: bangumi.bangumi
	}
}

export default connect(mapStateToProps,{
  loadApiWithPath
})(BangumiPage)
