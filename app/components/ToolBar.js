//兼容android，ios

import React, { Component, PropTypes } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
  ToolbarAndroid,
  Dimensions,
  StyleSheet,
  TabbarIOS,
  Platform,
  View,
  Image,
  Text,
} from 'react-native'

const w = Dimensions.get("window").width

class Toolbar extends Component {
  static contextTypes = {
    Theme: React.PropTypes.string.isRequired
  }

  static PropTypes = {
    openDrawer: PropTypes.func,
    goDownload: PropTypes.func
  }

  render(){
    if(Platform.os === 'ios'){
        return(
            <View style={styles.container}>
            </View>
        );
      
    } else {
      const { openDrawer, goDownload } = this.props
      return (
        <View style={styles.container}>
            <View style={[styles.header,{backgroundColor:this.context.Theme}]}>
                <View style={styles.headerLeft}>
                    <TouchableWithoutFeedback onPress={() => this.props.openDrawer()}>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require('../resource/ic_navigation_drawer.png')} style={styles.icon} resizeMode={"contain"}/>
                            <View style={{flexDirection:"row",width:200}}>
                                <View style={styles.faceBorder}>
                                    <Image source={require('../resource/face.jpg')} style={styles.face} resizeMode={"contain"}/>
                                </View>
                                <Text style={styles.username}>磊磊SAMA</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.headerRight}>
                    <TouchableHighlight style={styles.touchable} underlayColor="#4CA3E9" onPress={() => this.props.goDownload()}>
                        <Image source={require('../resource/ic_menu_top_game_center.png')} style={{height:20,width:20}} resizeMode={"contain"}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchable} underlayColor="#4CA3E9" onPress={() => this.props.goDownload()}>
                        <Image source={require('../resource/ic_toolbar_menu_download.png')} style={{height:16,width:16}} resizeMode={"contain"}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchable} underlayColor="#4CA3E9" onPress={() => this.props.goDownload()}>
                        <Image source={require('../resource/ic_toolbar_menu_search.png')} style={{height:16,width:16}} resizeMode={"contain"}/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      )
    }
  }
}

let styles = StyleSheet.create({
  container: {
    width: w,
    height: 55
  },
  top:{
        position:"absolute",
        flex:1,
        width:w,
    },
    header:{
        // flex:1,
        height:55,
        flexDirection:"row",
        justifyContent:"space-between",
        // paddingTop:6,
        paddingBottom:6
    },
    headerLeft:{
        flexDirection:"row",
        paddingTop:11
    },
    headerRight:{
        flexDirection:"row"
        // marginTop:8
    },
    icon:{
        height:12.5,
        width:20,
        left:-10,
        marginTop:10
    },
    faceBorder:{
        marginLeft:5,
        borderRadius:35,
        borderColor:"#ffffff",
        borderWidth:2,
        height:35,
        width:35
    },
    face:{
        height:31,
        width:31,
        borderRadius:31
    },
    username:{
        fontSize:16,
        color:"#ffffff",
        left:15,
        marginTop:6
    },
    touchable:{
        height:45,
        width:45,
        marginVertical:5,
        marginHorizontal:2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconRight:{
        width:24,
        height:24
    },
    selector:{
        backgroundColor:"#2196F3",
        flexDirection:"row",
        height:40
    },
    selectTab:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        marginHorizontal:15
    },
    selectTabActive:{
        flex:1,
        borderBottomWidth:2,
        borderBottomColor:"#ffffff",
        // justifyContent:"center",
        alignItems:"center",
        marginHorizontal:15
    },
    selectText:{
        textAlign:"center",
        color:"#A6D5FA",
        marginTop:10
    },
})

export default Toolbar
