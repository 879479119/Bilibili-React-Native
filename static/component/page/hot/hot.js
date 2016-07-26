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
    RefreshControl
} from 'react-native';
import style from './style';
import Swiper from 'react-native-swiper';

class hot extends Component{
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
                }>
                <View style={{height:1000,flex:1}}>
                    <Swiper style={style.wrapper}
                            showsPagination={true}
                            autoplay={true}
                            loop={true}
                            height={113}
                            paginationStyle={{position:"absolute",marginRight:-300,bottom:10}}
                            dot={<View style={{
                                backgroundColor: '#ffffff',
                                width: 5,
                                height: 5,
                                borderRadius: 10,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}/>}
                            activeDot={<View style={{
                                backgroundColor: '#007aff',
                                width: 5,
                                height: 5,
                                borderRadius: 10,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}/>}
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