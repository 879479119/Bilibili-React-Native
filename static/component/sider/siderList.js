/**
 * Created by zi on 2016/7/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import style from './listStyle';

class Cell extends Component{
    c;

    constructor(props){
        super(props);
        this.count();
        this.c = 0;
    }
    count(){
        this.c ++;
    }
    render(){
        let source = './img/ic_file_download_black_24dp.png';
        return(
            <View style={style.cell}>
                <Image source={require('./img/ic_file_download_black_24dp.png')} style={{width:16,height:16}}/>
                <Text>{this.props.name}{this.c}</Text>
            </View>
        );
    }
}

class list extends Component{
    render(){
        //TODO: 以后这里还是改成用Listview吧，现在只是觉得这几个项目没必要费工夫
        return (
            <View style={style.container}>
                <View>
                    <Cell name={"首页"} img={"ic_home_black_24dp.png"} />
                    <Cell name={"离线缓存"} img={"ic_file_download_black_24dp.png"}/>
                </View>
                <View>
                    <Cell name={"我的收藏"} img={"ic_star_black_24dp.png"}/>
                    <Cell name={"历史记录"} img={"ic_history_black_24dp.png"}/>
                    <Cell name={"关注的人"} img={"ic_people_black_24dp.png"}/>
                    <Cell name={"我的钱包"} img={"ic_account_balance_wallet_black_24dp.png"}/>
                </View>
                <View>
                    <Cell name={"主题选择"} img={"ic_color_lens_black_24dp.png"}/>
                    <Cell name={"应用推荐"} img={"ic_shop_black-24dp.png"}/>
                    <Cell name={"设置与帮助"} img={"ic_settings_black_24dp.png"}/>
                </View>
            </View>
        );
    }
}

module.exports = list;