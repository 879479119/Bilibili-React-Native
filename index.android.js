/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  BackAndroid,
  View,Text
} from 'react-native';
// import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
import main from './static/component/main/main';
import splash from './static/component/splash/splash';
//temp模块做调试的时候用
import temp from './static/component/temp';
var _navigator = null;


class entrance extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navigator
                initialRoute={{name:"splash",component:main}}
                renderScene={
                    (route,navigator) =>{
                        _navigator = navigator;
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            />
        );
    }
}

BackAndroid.addEventListener("hardwareBackPress",()=>{
    if(_navigator && _navigator.getCurrentRoutes().length > 1){
        _navigator.pop();
        return true;
    }
    return false;
});

AppRegistry.registerComponent('reactNative', () => entrance);
