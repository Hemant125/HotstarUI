import { View, Text  , Image, FlatList} from 'react-native'
import React from 'react'
import styles from './Style'

import { responsiveFontSize,  responsiveHeight,  responsiveWidth} from './responsiveDimensions'


const DATA=[
  {image:require('./src/mahaShivratriImage.png')},
  {image:require('./src/RadhaKrishna.png')},
  {image:require('./src/mahaShivratriImage.png')},
  {image:require('./src/RadhaKrishna.png')},
]

const App = () => {
  return (
   <View style={styles.container}>
      <View style={styles.headerTitle}>
       <Image source={require('./src/viacomlogo.png')} style={styles.headerImage} />
      </View> 
   
     <View style={styles.headerPopularShow}>
      <Text style={styles.headerPopularShowText}>Popular Shows this Week</Text>
      </View>


      <FlatList
      horizontal 
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) =>{
        return(
          <View style={styles.DramaContent}>
           
            <Image style={{resizeMode:'contain',height:responsiveHeight(100),width:responsiveWidth(50)}} source ={item.image}/>
          </View>
        )
      }}
      />
   </View>
  )
}

export default App