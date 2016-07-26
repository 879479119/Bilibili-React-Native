/**
 * Created by zi on 2016/7/26.
 */
import {StyleSheet,Dimensions} from 'react-native';

module.exports = StyleSheet.create({
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
    activeText:{
        marginLeft:30,
        marginTop:2,
        color:"#4197DB"
    },
    actIcon:{
        width:25,
        height:25,
        tintColor:"#4197DB"
    }
});