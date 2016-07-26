/**
 * Created by zi on 2016/7/25.
 */
/**
 * Created by zi on 2016/7/23.
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

class sider extends Component{
    render(){
        return (
            <ScrollView style={style.container}>
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
                    <TouchableWithoutFeedback style={style.notification}>
                        <Image resizeMode={"contain"} style={{width:17}} source={require('./img/ic_navigation_header_notification.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={style.mode}>
                        <Image resizeMode={"contain"} style={{width:17}} source={require('./img/ic_switch_night.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={style.wrapper}>
                        <Image resizeMode={"contain"} style={{width:130,height:150}} source={require('./img/bili_drawerbg_logined.png')}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={style.body}>

                </View>
            </ScrollView>
        );
    }
}

module.exports = sider;