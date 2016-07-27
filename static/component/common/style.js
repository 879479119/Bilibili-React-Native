/**
 * Created by zi on 2016/7/26.
 */
import {StyleSheet,Dimensions} from 'react-native';

let w = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    header:{
        width:w,
        position:"absolute",
        height:55,
        flexDirection:"row",
        backgroundColor:"#2196F3",
        justifyContent:"space-between"
    },
    headerLeft:{
        // width:55,
        height:55,
        flexDirection:"row"
    },
    headerRight:{
        flexDirection:"row"
    },
    touchable:{
        width:55,
        height:55,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginHorizontal:10
    }
});