import { SafeAreaView, StyleSheet, Text, View, Image, Alert, Pressable, TouchableOpacity} from 'react-native'
import React from 'react';

//Responsive
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

// Navigations
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type GettingStartedProps = NativeStackScreenProps<RootStackParamList, 'gettingStarted'>


const GettingStarted = ({navigation}: GettingStartedProps) => {

  return (
    <SafeAreaView style={styles.body}>
         <View style={styles.header}>
                <Text style={styles.headerTxt}>CarbonMap</Text>
            </View>
        <View style={styles.container}>
           <Text style={styles.bodyTxt}>
           Pathway for the sustainable future & beyond
           </Text>
           <Image style={styles.image}
            source={{uri: 'https://img.freepik.com/free-vector/hand-drawn-people-planting-tree-illustrated_23-2149214944.jpg?w=2000'}}/>
            <Text style={styles.introTxt}>
            CarbonMap is a non-profit organisation created with the intention to provide us a knowledge about our carbon foot print and how can we utilise things around us to create a more sustainable future.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
                <View style={styles.btn}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default GettingStarted

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: responsiveHeight(5),
        backgroundColor: '#fff'
    },
    header: {
        padding: responsiveWidth(5)
    },
    headerTxt: {
        fontSize: responsiveFontSize(3.4),
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyTxt: {
        // fontSize: 30,
        fontSize: responsiveFontSize(3.75),
    },
    image: {
        margin: responsiveWidth(2.5),
        height: responsiveHeight(40),
        width: responsiveWidth(100)
    },
    introTxt: {
        margin: responsiveWidth(3),
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center'
    },
    btn: {
        margin: responsiveWidth(4),
        width: responsiveWidth(45),
        height: responsiveWidth(18),
        backgroundColor: 'black',
        borderRadius: responsiveWidth(4),
        // padding: responsiveWidth(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        color: 'white',
        fontSize: responsiveFontSize(3)        
    },
   
})