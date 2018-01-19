import {StyleSheet} from "react-native";

module.exports=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    logoImage:{
        height:60,
        width:250,
        alignItems:'center'
    },
    largeText:{
        marginTop:40,
        fontSize:20,
        color:'black'
    },
    smallText:{
        marginTop:5,
        fontSize:10,
        color:'gray'
    },
    btnLogin:{
        marginTop:15
    },
    newLoginBind:{
        paddingTop:30

    },
    textViewLogin:{
        alignItems:'center'
    },
    forgotPass:{
        marginTop:17,
        alignSelf:'flex-end'
    },
    icon: {
        position: 'absolute',
        top: 33,
        right: 0

    }
});
