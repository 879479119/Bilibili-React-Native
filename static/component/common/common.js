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
    Picker,
} from 'react-native';
import style from './style';

class common extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    _backBtn(){
        //TODO:返回功能
    }
    render(){
        //TODO:这里面还有一个选择排序的框框，把他做成传入参数拓展吧
        return(
            <View style={{flex:1}}>
                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <TouchableHighlight style={style.touchable} underlayColor={"#4197DB"} onPress={()=>{a = 0}}>
                            <Image source={require('./img/abc_ic_ab_back_mtrl_am_alpha.png')} style={{width:24,height:24}} />
                        </TouchableHighlight>
                        {this.props.topAddition}
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
                    {this.props.body}
                </View>
                {this.props.control}
            </View>
        );
    }
}

module.exports = common;