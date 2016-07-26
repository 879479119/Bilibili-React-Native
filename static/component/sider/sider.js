/**
 * Created by zi on 2016/7/25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import style from './style';
import List from './siderList'

class sider extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                <View style={style.top}>
                    <View  style={style.left}>
                        <TouchableWithoutFeedback style={style.faceTouch}>
                            <View style={style.faceBorder}>
                                <Image resizeMode={Image.resizeMode.contain} source={require('./img/face.jpg')} style={{borderRadius:35,width:70,height:70}}/>
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
                                source={require('./img/ic_user_male_border.png')}/>
                        </View>
                        <View style={style.status}>
                            <Text style={{color:"#2196F3",fontSize:8,alignItems:"center",justifyContent:"center"}}>正式会员</Text>
                        </View>
                        <Text style={{color:"#A6D5FA",fontSize:14}}>硬币 : 297.1</Text>
                    </View>
                    <View  style={style.notification}>
                        <TouchableWithoutFeedback>
                            <Image resizeMode={"contain"} style={{width:35,height:35}} source={require('./img/ic_navigation_header_notification.png')}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={style.mode}>
                        <TouchableWithoutFeedback>
                            <Image resizeMode={"contain"} style={{width:35}} source={require('./img/ic_switch_night.png')}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={style.wrapper}>
                        <TouchableWithoutFeedback>
                            <Image resizeMode={"contain"} style={{width:180}} source={require('./img/bili_drawerbg_logined.png')}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={style.body}>
                    <List/>
                </View>
            </ScrollView>
        );
    }
}

module.exports = sider;