import React, { Component, PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'


class DownloadPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.test}>
          下载页
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
    backgroundColor: '#EFF1F0',
  },
  test: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default DownloadPage
