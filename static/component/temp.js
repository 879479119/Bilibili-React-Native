/**
 * Created by zi on 2016/7/29.
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

class view extends Component{
    render(){
        return(
            <View style={{backgroundColor:"#000",flex:1}}>
                <View style={{backgroundColor:"#ddd",height:100}}>
                    <Text>566666666666666</Text>
                </View>
                <ScrollView style={{backgroundColor:"#000",height:570}}
                            onStartShouldSetResponder={()=>true}
                            onMoveShouldSetResponder={()=>true}>
                    <View style={{backgroundColor:"#00bfff",height:1200}}>
                        <Text>23333333</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class scroll extends Component{
    render(){
        return(
            <Scrollview style={{backgroundColor:"#000",flex:1}} onSroll={this.props.fn}>
                <View style={{backgroundColor:"#ddd",height:100}}>
                    <Text>566666666666666</Text>
                </View>
                <ScrollView style={{backgroundColor:"#000",height:570}}
                            onStartShouldSetResponder={()=>true}
                            onMoveShouldSetResponder={()=>true}>
                    <View style={{backgroundColor:"#00bfff",height:1200}}>
                        <Text>23333333</Text>
                    </View>
                </ScrollView>
            </Scrollview>
        );
    }
}

class hot extends Component{
    constructor(props){
        super(props);
        this.state = {s:true};
    }
    componentWillMount() {

    }
    _handle(evt){
        let curY = evt.nativeEvent.contentOffset.y;
        if(curY == 0){
            this.setState({s:false});
        }
    }
    render(){
        console.log(this);
        return(
            <View style={{flex:1}}>
                {view
                }
            </View>
        );
    }
}


module.exports = hot;