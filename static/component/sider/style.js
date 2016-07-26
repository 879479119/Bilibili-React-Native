/**
 * Created by zi on 2016/7/25.
 */
/**
 * Created by zi on 2016/7/23.
 */
import {StyleSheet,Dimensions} from 'react-native';

let w = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        backgroundColor:"#2196F3",
        height:165
    },
    left:{
        marginVertical:15,
        marginHorizontal:15,
        position:"relative"
    },
    user:{
        flexDirection:"row",
        marginTop:10
    },
    faceTouch:{
    },
    faceBorder:{
        borderRadius:36,
        justifyContent:"center",
        width:72,
        height:72,
        backgroundColor:"#ffffff"
    },
    status:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#A6D5FA",
        width:42,
        height:13,
        borderRadius:10,
        marginVertical:3
    },
    notification:{
        width:35,
        height:35,
        top:-150,
        left:150
    },
    mode:{
        width:35,
        height:35,
        top:-202,
        left:205
    },
    wrapper:{
        opacity:0.2,
        top:-280,
        left:80
    }
});