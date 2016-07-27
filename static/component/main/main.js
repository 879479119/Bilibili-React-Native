/**
 * Created by zi on 2016/7/23.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ViewPagerAndroid,
    DrawerLayoutAndroid,
    ScrollView,
    RefreshControl,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import style from './style';
import Hot from '../page/hot/hot';
import Sider from '../sider/sider';
import Common from '../common/common';
import DownManager from '../downManager/downManager';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state={value:1};
    }
    componentDidMount(){
        this.listener = RCTDeviceEventEmitter.addListener('changeTab',(value)=>{
            this.setState({value});
        });
    }
    render(){
        return(
            <View style={(()=>{
                    if(this.state.value == this.props.index){
                        return style.selectTabActive;
                    }else{
                        return style.selectTab;
                    }
                })()}
            >
                <Text
                    style={style.selectText}
                    onPress={()=>{
                        RCTDeviceEventEmitter.emit("clickTab",this.props.index);
                    }}
                >{this.props.text}</Text>
            </View>
        );
    }
}

class Selector extends Component{
    render(){
        let arr = ["直播","推荐","番剧","分区","关注","发现"];
        return(
            <View style={style.selector}>
                {arr.map((name,index)=><Tab text={name} index={index}/>)}
            </View>
        );
    }
}

class ViewPager extends Component{
    componentDidMount(){
        this.listener = RCTDeviceEventEmitter.addListener('clickTab',(value)=>{
            RCTDeviceEventEmitter.emit("changeTab",value);
            this.viewPager.setPage(value);
        });
    }
    render(){
        return(
            <ViewPagerAndroid
                initialPage={1}
                style={{flex:1}}
                ref={viewPager => { this.viewPager = viewPager; }}
                onPageSelected={(event)=>{
                                let page = event.nativeEvent.position;
                                RCTDeviceEventEmitter.emit("changeTab",page);
                            }}>
                <View style={{backgroundColor:"#000000",flex:1}}>
                    <Text>2121</Text>
                </View>
                <View style={{flex:1}}>
                    <Hot/>
                </View>
                <View>
                    <Text>2121</Text>
                </View>
                <View>
                    <Text>2121</Text>
                </View>
                <View>
                    <Text>2121</Text>
                </View>
                <View>
                    <Text>2121</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

//这里实在是迫不得已，在navigationView里面的this指针都会转向Drawer
var __navigator = null;

class main extends Component{
    constructor(props){
        super(props);
        this.state={value:1};
        __navigator = this.props.navigator;
    }
    navigationView(){
        return(
            <Sider navi={__navigator}/>
        );
    }
    componentDidMount(){

    }
    _goDownload(){
        this.props.navigator.push({
            name:"download",
            component:DownManager
        });
    }
    render(){
        return(
            <DrawerLayoutAndroid
                drawerWidth={260}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={(()=>{return this.navigationView})()}
                >
                <View style={{flex:1}}>
                    <View style={style.top}>
                        <View style={style.header}>
                            <View style={style.headerLeft}>
                                <TouchableWithoutFeedback>
                                    <Image source={require('./img/ic_navigation_drawer.png')} style={style.icon} resizeMode={"contain"}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={{flexDirection:"row",width:200}}>
                                        <View style={style.faceBorder}>
                                            <Image source={require('./img/face.jpg')} style={style.face} resizeMode={"contain"}/>
                                        </View>
                                        <Text style={style.username}>磊磊SAMA</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={style.headerRight}>
                                <TouchableHighlight style={style.touchable} underlayColor="#4CA3E9" onPress={this._goDownload.bind(this)}>
                                    <Image source={require('./img/ic_menu_top_game_center.png')} style={{height:20,width:20}} resizeMode={"contain"}/>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.touchable} underlayColor="#4CA3E9" onPress={this._goDownload.bind(this)}>
                                    <Image source={require('./img/ic_toolbar_menu_download.png')} style={{height:16,width:16}} resizeMode={"contain"}/>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.touchable} underlayColor="#4CA3E9" onPress={this._goDownload.bind(this)}>
                                    <Image source={require('./img/ic_toolbar_menu_search.png')} style={{height:16,width:16}} resizeMode={"contain"}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Selector/>
                    </View>
                    <View style={style.container}>
                        <ViewPager/>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

module.exports = main;