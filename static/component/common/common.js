/**
 * Created by zi on 2016/7/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    Switch
} from 'react-native';
import style from './style';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

class Empty extends Component{
    render(){
        return (
            <View style={{backgroundColor:"#eaeaea",flex:1,justifyContent:"center",alignItems:"center"}}>
                <View style={{}}>
                    <Image source={require('./img/img_tips_error_no_downloads.png')} style={{width:200}} resizeMode="contain"/>
                    <Text style={{color:"#9b9b9b"}}>没有找到你的缓存哟</Text>
                </View>
            </View>
        );
    }
}

class Control extends Component{
    render(){
        return (
            <View style={{height:60}}>
                <View style={{backgroundColor:"#2196F3",flex:1,justifyContent:"center",alignItems:"center",height:20}}>
                    <View style={{backgroundColor:"#aaaaaa",height:20,width:100}}>
                        <Text style={{color:"#333333"}}>主存储: 30.4GB / 可用: 18.7GB</Text>
                    </View>
                </View>
            </View>
        );
    }
}

class common extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        //TODO:这里面还有一个选择排序的框框
        return(
            <View style={{flex:1}}>
                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <TouchableHighlight style={style.touchable} underlayColor={"#4197DB"} onPress={()=>{a = 0}}>
                            <Image source={require('./img/abc_ic_ab_back_mtrl_am_alpha.png')} style={{width:24,height:24}} />
                        </TouchableHighlight>
                    </View>
                    <View style={style.headerRight}>
                        <TouchableHighlight style={[style.touchable,{width:45,height:45,marginHorizontal:5,marginVertical:5}]} underlayColor={"#4CA3E9"} onPress={()=>{a = 0}}>
                            <Image source={require('./img/abc_ic_search_api_mtrl_alpha.png')} style={{height:24,width:24}} />
                        </TouchableHighlight>
                        <TouchableHighlight style={[style.touchable,{width:40,height:45,marginVertical:5}]} underlayColor={"#4CA3E9"}  onPress={()=>{a = 0}} >
                            <Image source={require('./img/abc_ic_menu_moreoverflow_mtrl_alpha.png')} style={{height:24,width:24}} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{flex:1,marginTop:55}}>
                    
                </View>
                <View style={{height:60}}>
                    <Control/>
                </View>
            </View>
        );
    }
}

module.exports = common;