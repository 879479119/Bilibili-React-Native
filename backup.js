/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  BackAndroid,
  Dimensions,
  ViewPagerAndroid,
  ListView,
  TextInput,
  PixelRatio,
  DrawerLayoutAndroid,
  Picker,
  Animated
} from 'react-native';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

var _navigator = null;
BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) { //若当前导航系统中的场景界面深度大于1，则返回到上一个界面
    _navigator.pop();
    return true;  //返回true表示处理过该button的点击事件，避免android回退按钮的默认逻辑（退出app）
  }
  return false; //若已经是根界面，则返回false，表示退出app
});

const W = Dimensions.get("window").width * PixelRatio.get();

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(
        this.state.fadeAnim,
        {toValue: 0.3},
    ).start();
  }
  render() {
    return (
        <Animated.View
            style={{opacity: this.state.fadeAnim}}>
          {this.props.children}
        </Animated.View>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ''
    }
  }
  change(value){
    RCTDeviceEventEmitter.emit('change',value);
  }
  render(){
    return(
      <TextInput onChangeText={this.change.bind(this)} style={styles.input}/>
    );
  }
}

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : 'nothing yet'
    };
  }
  componentDidMount(){
    this.listener = RCTDeviceEventEmitter.addListener('change',(text)=>{
      this.setState({text});
    });
  }
  componentWillUnmount(){
    this.listener.remove();
  }
  render(){
    return(
      <Text>{this.state.text}</Text>
    );
  }
}

class List extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    this.state = {dataSource:ds.cloneWithRows(this.props.data || ['23423423','ssgsfggs','sg45t5gsf43'])};
  }
  render(){
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {
          (row)=><Text>{row}</Text>
        }
      />
    );
  }
}

class Page extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>Im in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View>
          <Text>Hello</Text>
          <Text>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

class b extends Component {
  jump(){
    const { navigator } = this.props;

    if(navigator) {
      navigator.push({
        name: 'c',
        component: c
      })
    }
  }
  render() {
    _navigator = this.props.navigator;
    return (
        <View style={styles.container}>
          <Image source={require("./face.jpg")} style={styles.image}/>
          <Text>{W}px</Text>
          <TouchableOpacity style={{width:200,height:200,backgroundColor:"#ffffff"}} onPress={this.jump.bind(this)}/>
          <Input/>
          <Show/>
        </View>
    );
  }
}

class c extends Component {
  jump(){

  }
  render() {
    _navigator = this.props.navigator;
    var arr = ['wewewewe','ererererer','rtrtrtrtrt'];
    return (
        <View>
          <FadeInView children={
            <ViewPagerAndroid style={styles.viewP}>
              <View style={styles.view}>
                <Text>2333333333</Text>
              </View>
              <View style={styles.view}>
                <Text>66666666</Text>
                <Pick/>
              </View>
            </ViewPagerAndroid>
          }/>
          <List data={arr}/>
        </View>
    );
  }
}

class Pick extends Component{
  constructor(prop){
    super(prop);
    this.state = {
      language:'java'
    }
  }
  render(){
    return(
        <Picker
            mode = {'dropdown'}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
    );
  }
}

class a extends Component{
  static bibi(){
    console.log(23333);
  }
  render(){
    return (
        <Navigator
          initialRoute={{name:"home",component:b}}
          renderScene={
            (route,navigator) =>{
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }
          }
          configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  image:{
    width: 157*PixelRatio.get(),
    height: 157*PixelRatio.get()
  },
  viewP:{
    alignItems: 'center',
    padding: 20,
    height:200,
    backgroundColor: '#ffffff'
  },
  view:{
    flex:1,
    backgroundColor: '#00ffff'
  },
  input:{
    width:200,
    fontSize:20
  }
});

AppRegistry.registerComponent('reactNative', () => a);
