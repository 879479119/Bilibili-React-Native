/**
 * Created by zi on 2016/7/23.
 */
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    wrapper:{
        // height:100
        backgroundColor:"#000000"
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    bannerImage:{
        height: 113,
        width:360,
        borderColor:"#ffffff",
        borderWidth:0
        // position: 'relative',
        // zIndex:101
    },
    dot:{
        backgroundColor: '#ffffff',
        width: 5,
        height: 5,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot:{
        backgroundColor: '#007aff',
        width: 5,
        height: 5,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
});