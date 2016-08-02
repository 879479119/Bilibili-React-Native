/**
 * Created by zi on 2016/7/26.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

const Icon =[
  require("../resource/ic_home_black_24dp.png"),
  require("../resource/ic_file_download_black_24dp.png"),
  require("../resource/ic_star_black_24dp.png"),
  require("../resource/ic_history_black_24dp.png"),
  require("../resource/ic_people_black_24dp.png"),
  require("../resource/ic_account_balance_wallet_black_24dp.png"),
  require("../resource/ic_color_lens_black_24dp.png"),
  require("../resource/ic_shop_black_24dp.png"),
  require("../resource/ic_settings_black_24dp.png")
]


// class icon {
//     constructor(){
//         this.sources = [
//             <Image source={require("../resource/ic_home_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_file_download_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_star_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_history_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_people_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_account_balance_wallet_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_color_lens_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_shop_black_24dp.png")}  style={style.icon}/>,
//             <Image source={require("../resource/ic_settings_black_24dp.png")}  style={style.icon}/>
//         ]
//         this.actSources = [
//             <Image source={require("../resource/ic_home_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_file_download_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_star_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_history_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_people_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_account_balance_wallet_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_color_lens_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_shop_black_24dp.png")}  style={style.actIcon}/>,
//             <Image source={require("../resource/ic_settings_black_24dp.png")}  style={style.actIcon}/>
//         ]
//     }
//     getImage(index,active){
//         return active?this.actSources[index]:this.sources[index]
//     }
// }
//
// class Cell extends Component{
//
//     constructor(props){
//         super(props)
//         this.state = {selected:0}
//     }
//     componentDidMount(){
//         this.index = this.props.index
//
//     }
//     _press(){
//         // RCTDeviceEventEmitter.emit("closeDrawer")
//         // let _navi = {}
//         // switch (this.index){
//         //     case 1:_navi = {
//         //         name: 'download',
//         //         component: DownManager
//         //     }break
//         //     case 7:_navi = {
//         //         name: 'theme',
//         //         component: Common
//         //     }break
//         //     case 8:_navi = {
//         //         name: 'setting',
//         //         component: Common
//         //     }break
//         // }
//         // this.props.navi.push(_navi)
//     }
//     render(){
//         let active = false
//         //TODO:感觉可能会内存泄漏，但是我不会写静态方法
//         let temp = new icon
//         if(this.state.selected === this.index){
//             active = true
//         }
//         return(
//             <TouchableHighlight underlayColor={"#e0e0e0"} style={active?style.activeTouch:style.touch}
//             onPress={this._press.bind(this)}>
//                 <View style={style.cell}>
//                     {temp.getImage(this.index,active)}
//                     <Text style={active?style.activeText:{color:"#343434",marginLeft:30,marginTop:2}}>{this.props.name}</Text>
//                 </View>
//             </TouchableHighlight>
//         )
//     }
// }
//
// class list extends Component{
//     render(){
//         //TODO: 以后这里还是改成用Listview吧，现在只是觉得这几个项目没必要费工夫
//         return (
//             <View style={style.container}>
//                 <View style={style.group}>
//                     <Cell name={"首页"} index={0}/>
//                     <Cell name={"离线缓存"} index={1} navi={this.props.navi}/>
//                 </View>
//                 <View style={style.group}>
//                     <Cell name={"我的收藏"} index={2} navi={this.props.navi}/>
//                     <Cell name={"历史记录"} index={3} navi={this.props.navi}/>
//                     <Cell name={"关注的人"} index={4} navi={this.props.navi}/>
//                     <Cell name={"我的钱包"} index={5} navi={this.props.navi}/>
//                 </View>
//                 <View style={[{paddingVertical:10},style.group]}>
//                     <Cell name={"主题选择"} index={6} navi={this.props.navi}/>
//                     <Cell name={"应用推荐"} index={7} navi={this.props.navi}/>
//                     <Cell name={"设置与帮助"} index={8} navi={this.props.navi}/>
//                 </View>
//             </View>
//         )
//     }

class Cell extends Component{
  static contextTypes = {
    Theme: React.PropTypes.string.isRequired
  };
  constructor(props){
      super(props)
  }

  _press = (index) => {
    const {navi, handleSelected} = this.props
    handleSelected(index);
      switch (this.props.index){
          case 1:navi.push({
              name: 'DownloadPage'
          });
          break;
          case 6:navi.push({
            name: 'ThemePage'
          });
          break;
          case 8:navi.push({
            name: 'SettingPage'
          });
          break;
      }
  };

  render(){
    const {index, active } = this.props;
    const isSelect = index === active;
      return(
        <TouchableHighlight
          underlayColor={"#e0e0e0"}
          style={isSelect ? style.activeTouch : style.touch}
          onPress={() => this._press(index)}>
            <View style={style.cell}>
            <Image
              source={Icon[index]}
              style={isSelect ? [style.actIcon, {tintColor: this.context.Theme} ] :style.icon}/>
            <Text
              style={isSelect ? [style.activeText ,{color: this.context.Theme}]: style.defaultText}>
              {this.props.name}
            </Text>
          </View>
        </TouchableHighlight>
      )
  }
}

class list extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: 0
    }
  }

  handleSelected = (index) => {
    this.setState({
      active:index
    })
  }

  render(){
    const {navi} = this.props;
    const {active} = this.state;
      //TODO: 以后这里还是改成用Listview吧，现在只是觉得这几个项目没必要费工夫
      return (
          <View style={style.container}>
              <View style={style.group}>
                  <Cell
                    name={"首页"}
                    index={0}
                    active={active}
                    handleSelected={this.handleSelected}/>
                  <Cell
                    name={"离线缓存"}
                    active={active}
                    navi={navi}
                    index={1}
                    handleSelected={this.handleSelected} />
              </View>
              <View style={style.group}>
                  <Cell name={"我的收藏"}
                    active={active}
                    index={2}
                    navi={navi}
                    handleSelected={this.handleSelected} />
                  <Cell name={"历史记录"}
                    active={active}
                    index={3}
                    navi={navi}
                    handleSelected={this.handleSelected} />
                  <Cell name={"关注的人"}
                    active={active}
                    index={4}
                    navi={navi}
                    handleSelected={this.handleSelected} />
                  <Cell name={"我的钱包"}
                    active={active}
                    index={5}
                    navi={navi}
                    handleSelected={this.handleSelected} />
              </View>
              <View style={[{paddingVertical:10},style.group]}>
                  <Cell name={"主题选择"}
                    active={active}
                    index={6}
                    navi={navi}
                    handleSelected={this.handleSelected} />
                  <Cell name={"应用推荐"}
                    active={active}
                    index={7}
                    navi={navi}
                    handleSelected={this.handleSelected} />
                  <Cell
                    name={"设置与帮助"}
                    active={active}
                    index={8}
                    navi={navi}
                    handleSelected={this.handleSelected} />
              </View>
          </View>
      )
  }
}

let style = StyleSheet.create({
  container:{
        backgroundColor:"#fafafa"
    },
    touch:{
        flex:1,
        height:45,
        paddingHorizontal:15,
        justifyContent:"center"
        // alignItems:"center"
    },
    cell:{
        flexDirection:"row"
    },
    icon:{
        width:25,
        height:25,
        tintColor:"#7f7f7f"
    },
    group:{
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"#d9d9d9"
    },
    activeTouch:{
        flex:1,
        height:45,
        paddingHorizontal:15,
        justifyContent:"center",
        backgroundColor:"#d4d4d4"
    },
    defaultText:{
      color:"#343434",
      marginLeft:30,
      marginTop:2
    },
    activeText:{
        marginLeft:30,
        marginTop:2,
        color:"#4197DB"
    },
    actIcon:{
        width:25,
        height:25,
        // tintColor:"#4197DB"
    }
});

export default list
