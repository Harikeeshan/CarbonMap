import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.JustView}>

      </View>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnTxt}>Click Me</Text>
      </TouchableOpacity>
      <Image style={styles.image}
            source={{uri: 'https://img.freepik.com/free-vector/hand-drawn-people-planting-tree-illustrated_23-2149214944.jpg?w=2000'}}/>    
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur ea nisi illo culpa, libero incidunt dicta! Eius ipsa modi ducimus laudantium aliquam sunt dignissimos sint. Esse iure praesentium voluptate.</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(10),
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),

  },
  image: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(40),
    resizeMode: 'contain',
  },
  btn: {
    backgroundColor: '#000',
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: responsiveScreenWidth(10)
  },
  btnTxt: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
  },
  JustView: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    backgroundColor: 'green',
    borderRadius: responsiveWidth(10),
    marginBottom: 10
  }
})