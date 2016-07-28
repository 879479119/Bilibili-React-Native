/**
 * Created by zi on 2016/7/23.
 */
import {StyleSheet,Dimensions} from 'react-native';

let w = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    top:{
        position:"absolute",
        flex:1,
        width:w,
        zIndex:100
    },
    header:{
        backgroundColor:"#2196F3",
        // flex:1,
        height:55,
        flexDirection:"row",
        justifyContent:"space-between",
        // paddingTop:6,
        paddingBottom:6
    },
    headerLeft:{
        flexDirection:"row",
        paddingTop:11
    },
    headerRight:{
        flexDirection:"row"
        // marginTop:8
    },
    icon:{
        height:12.5,
        width:20,
        left:-10,
        marginTop:10
    },
    faceBorder:{
        marginLeft:5,
        borderRadius:35,
        borderColor:"#ffffff",
        borderWidth:2,
        height:35,
        width:35
    },
    face:{
        height:31,
        width:31,
        borderRadius:31
    },
    username:{
        fontSize:16,
        color:"#ffffff",
        left:15,
        marginTop:6
    },
    touchable:{
        height:45,
        width:45,
        marginVertical:5,
        marginHorizontal:2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconRight:{
        width:24,
        height:24
    },
    selector:{
        backgroundColor:"#2196F3",
        flexDirection:"row",
        height:40
    },
    selectTab:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        marginHorizontal:15
    },
    selectTabActive:{
        flex:1,
        borderBottomWidth:2,
        borderBottomColor:"#ffffff",
        // justifyContent:"center",
        alignItems:"center",
        marginHorizontal:15
    },
    selectText:{
        textAlign:"center",
        color:"#A6D5FA",
        marginTop:10
    },
    container:{
        backgroundColor:"#00bfff",
        flex:1,
        position:"relative",
        top:95
    }
});