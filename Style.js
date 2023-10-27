import { Text, StyleSheet, View } from 'react-native'
import React  from 'react'
import { responsiveHeight, responsiveWidth,responsiveFontSize } from './responsiveDimensions'



const styles = StyleSheet.create({

    container:{
        flex:1

    },
    headerTitle:{
        width:'100%',
        height:responsiveHeight(8),
      //  backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    headerImage:{
          height:responsiveHeight(25),
          width:responsiveWidth(70),
       
    },
    headerPopularShow:{
        width:'100%',
      // backgroundColor:'green'

    },
    headerPopularShowText:{
        height:responsiveHeight(7),
         marginLeft:responsiveWidth(4),
         color:'black',
         fontWeight:'bold',
        fontSize:responsiveFontSize(3)
    },
    DramaContent:{
       backgroundColor:'#fceeaa',
       height:responsiveHeight(25),
     marginLeft:responsiveWidth(5),
       width:responsiveWidth(48),
      // width:'25%',
      justifyContent:'center',
      alignItems:'center',
     
    }
})
export default styles