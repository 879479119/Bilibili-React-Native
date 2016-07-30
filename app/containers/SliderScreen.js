/*
 * 抽屉视图
 */

import React, { Component, PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native'
import {connect} from 'react-redux'

import List from '../components/SiderList'

import {handleInputChange} from '../actions/common'


class SliderScreen extends Component {
  static contextTypes = {
    Theme: React.PropTypes.string.isRequired
  }

  constructor(props){
    super(props)
    this.state = {
      bilibili: true
    }
  }
  _switchTheme = () => {
    const {handleInputChange, Theme} = this.props
    if(Theme === 'night'){
      handleInputChange('Theme','blue','common')
    } else {
      handleInputChange('Theme','night','common')
    }
  }

  _changeBili = () => {
      this.setState({bilibili: !this.state.bilibili})
  }

  render() {
    const {navigator} = this.props
    return (
      <View style={style.container}>
        <View style={[style.top,{backgroundColor: this.context.Theme}]}>
          <View  style={style.left}>
              <TouchableWithoutFeedback style={style.faceTouch}>
                  <View style={style.faceBorder}>
                      <Image resizeMode={Image.resizeMode.contain} source={require('../resource/face.jpg')} style={{borderRadius:35,width:70,height:70}}/>
                  </View>
              </TouchableWithoutFeedback>
              <View style={style.user}>
                  <Text style={{color:"#ffffff",fontSize:14}}>磊磊SAMA</Text>
                  <View style={{borderWidth:1,borderRadius:2,borderColor:"#ffffff",width:20,height:12,justifyContent:"center",alignItems:"center",marginTop:4,marginLeft:4}}>
                      <Text style={{color:"#ffffff",fontSize:8}}>LV4</Text>
                  </View>
                  <Image
                      resizeMode="contain"
                      style={{width:14,height:14,marginLeft:4,marginTop:3}}
                      source={require('../resource/ic_user_male_border.png')}/>
              </View>
              <View style={style.status}>
                  <Text style={{color:"#2196F3",fontSize:8,alignItems:"center",justifyContent:"center"}}>正式会员</Text>
              </View>
              <Text style={{color:"#A6D5FA",fontSize:14}}>硬币 : 297.1</Text>
          </View>
          <View style={style.wrapper}>
              <TouchableWithoutFeedback
                  onPressIn={()=> this._changeBili()}
                  onPressOut={()=> this._changeBili()}>
                  {/*这个地方弃用了这种动态加载图片的方案，因为动态加载图片是fadeIn的，会看出来
                      this.state.bilibili?
                          <Image resizeMode={"contain"} style={{width:180}} source={require('../resource/bili_drawerbg_logined.png')}/>
                          :
                          <Image resizeMode={"contain"} style={{width:180}} source={require('../resource/bili_drawerbg_not_logined.png')}/>
                  */}
                  <View>
                      <Image resizeMode={"contain"} style={{width:180,opacity:this.state.bilibili?1:0}} source={require('../resource/bili_drawerbg_logined.png')}/>
                      <Image resizeMode={"contain"} style={{width:180,marginTop:-278,opacity:this.state.bilibili?0:1}} source={require('../resource/bili_drawerbg_not_logined.png')}/>
                  </View>
              </TouchableWithoutFeedback>
          </View>
          <View  style={style.notification}>
              <TouchableOpacity  onPress={()=> this._switchTheme()}>
                  <Image resizeMode={"contain"} style={{width:35,height:35}} source={require('../resource/ic_navigation_header_notification.png')}/>
              </TouchableOpacity>
          </View>
          <View style={style.mode}>
              <TouchableOpacity onPress={()=> this._switchTheme()}>
                  <Image resizeMode={"contain"} style={{width:35}} source={require('../resource/ic_switch_night.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={style.body}>
          <List navi={this.props.navigator} />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container:{
        flex:1
  },
  top:{
      backgroundColor:"#2196F3",
      height:165
  },
  left:{
      marginVertical:15,
      marginHorizontal:15,
      position:"relative"
  },
  user:{
      flexDirection:"row",
      marginTop:10
  },
  faceTouch:{
  },
  faceBorder:{
      borderRadius:36,
      justifyContent:"center",
      width:72,
      height:72,
      backgroundColor:"#ffffff"
  },
  status:{
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#A6D5FA",
      width:42,
      height:13,
      borderRadius:10,
      marginVertical:3
  },
  wrapper:{
      opacity:0.2,
      marginTop:-215,
      marginLeft:80
  },
  notification:{
      width:35,
      height:35,
      marginTop:-217,
      marginLeft:150
  },
  mode:{
      width:35,
      height:35,
      marginTop:-53,
      marginLeft:205
  }
})

function mapStateToProps(state) {
	const {
		common:	{Theme},
	} = state
	return {
		Theme
	}
}

export default connect(mapStateToProps,{
	handleInputChange
})(SliderScreen)
