/**
 * Created by zi on 2016/7/23.
 */
import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    Text,
    View,
    Image,
    ViewPagerAndroid,
    DrawerLayoutAndroid,
    Dimensions,
    PixelRatio,
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
import ScrollTabView from 'react-native-scrollable-tab-view'

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
    componentWillUnmount(){
        //TODO:卸载事件绑定
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
                    <Hot refresh={this.props.refresh}/>
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
        this.multi = PixelRatio.get();
        this.state = {value:1,drawer:"close",offsetY:0};
        __navigator = this.props.navigator;
    }
    componentDidMount(){
        this.listener = RCTDeviceEventEmitter.addListener('closeDrawer',()=>{
            this._closeDrawer();
        });
    }
    navigationView(){
        return(
            <Sider navi={__navigator}/>
        );
    }
    componentWillUnmount(){
        //TODO:卸载事件绑定
    }
    _refresh(dy){
        console.log(this._refresh);
        // this.prevY = this.state.offsetY;
        // this.setState({offsetY:dy * this.multi});
    }
    _goDownload(){
        this.props.navigator.push({
            name:"download",
            component:DownManager
        });
    }
    _openDrawer(){
        this._drawer.openDrawer();
        this.state.drawer = "open";
    }
    _closeDrawer(){
        this._drawer.closeDrawer();
        this.state.drawer = "close";
    }
    render(){
        //TODO:需要改成向上拉就能折叠的抽提效果，但是调用频率实在太低了不能做成连贯的动画
        let w = Dimensions.get("window").width * PixelRatio.get();
        return(
            <DrawerLayoutAndroid
                ref={(drawer)=>this._drawer = drawer}
                drawerWidth={260}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={(()=>{return this.navigationView})()}
                >
                <View style={{flex:1}}>
                    <View style={{position:"absolute",flex:1,width:w,top: -this.prevY - this.state.offsetY}}>
                        <View style={style.header}>
                            <View style={style.headerLeft}>
                                <TouchableWithoutFeedback onPress={this._openDrawer.bind(this)}>
                                    <View style={{flexDirection:"row"}}>
                                        <Image source={require('./img/ic_navigation_drawer.png')} style={style.icon} resizeMode={"contain"}/>
                                        <View style={{flexDirection:"row",width:200}}>
                                            <View style={style.faceBorder}>
                                                <Image source={require('./img/face.jpg')} style={style.face} resizeMode={"contain"}/>
                                            </View>
                                            <Text style={style.username}>磊磊SAMA</Text>
                                        </View>
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
                    <View style={{backgroundColor:"#00bfff",flex:1,position:"relative",top:95}}>
                        <ViewPager refresh={this}/>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

module.exports = main;
