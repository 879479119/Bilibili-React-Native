/**
 * App启动视图
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar
} from 'react-native'


class SplashScreen extends Component{
    constructor(props){
        super(props)
        this.state = {splash:true}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                name:"MainPage",
            })
        },1000)
    }

    render(){
        let {width,height} = Dimensions.get("window")
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Image source={require('../resource/19-58-28.jpg')} style={{width:width,height:height}}/>
            </View>
        )
    }
}

export default SplashScreen
