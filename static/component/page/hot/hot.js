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
    ScrollView,
    RefreshControl,
    PanResponder,
} from 'react-native';
import style from './style';
import Swiper from 'react-native-swiper';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';


class hot extends Component{
    constructor(props){
        super(props);
        this.prevY = 0;
    }
    _scroll(evt){
        let curY = evt.nativeEvent.pageY;
        if(curY > this.prevY){
            console.log("down");
        }
        this.prevY = curY;
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: this._handlePanResponderMove
        });
    }
    _handlePanResponderMove(e,gesture){
        RCTDeviceEventEmitter.emit("scroll",gesture.dy);
    }
    render(){
        return(
            <ScrollView
                refreshControl={
                    <RefreshControl
                    // onRefresh={this._onRefresh}
                    tintColor="#ff0000"
                    titleColor="#00ff00"
                    colors={['#2196F3']}
                    progressBackgroundColor="#ffffff"
                    />
                }
                onLayout={this._scroll.bind(this)}
                onStartShouldSetResponder={()=>true}
                onMoveShouldSetResponder={()=>true}
                {...this._panResponder.panHandlers}
            >
                <View style={{height:1000,flex:1}}>
                    <Swiper style={style.wrapper}
                            showsPagination={true}
                            autoplay={true}
                            loop={true}
                            height={113}
                            paginationStyle={{position:"absolute",marginRight:-300,bottom:10}}
                            dot={<View style={style.dot}/>}
                            activeDot={<View style={style.activeDot}/>}
                    >
                        <View style={style.slide}>
                            <Image source={require('./img/19-59-16.jpg')} style={style.bannerImage} resizeMode={"contain"}/>
                        </View>
                        <View style={style.slide}>
                            <Image source={require('./img/19-59-18.jpg')} style={style.bannerImage} resizeMode={"contain"}/>
                        </View>
                        <View style={style.slide}>
                            <Image source={require('./img/19-59-20.jpg')} style={style.bannerImage} resizeMode={"contain"}/>
                        </View>
                        <View style={style.slide}>
                            <Image source={require('./img/19-59-54.jpg')} style={style.bannerImage} resizeMode={"contain"}/>
                        </View>
                        <View style={style.slide}>
                            <Text>23333333333333333333333333333333</Text>
                        </View>
                    </Swiper>
                </View>
                <Image source={require('./img/19-59-16.jpg')} style={{width:300,height:113,borderColor:"#ffffff",borderWidth:3}} resizeMode={"contain"}/>
                <Text>233333333333</Text>
            </ScrollView>
        );
    }
}


module.exports = hot;