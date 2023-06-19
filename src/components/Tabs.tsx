import { 
    StyleSheet, 
    View,
    Image
} from 'react-native'
import React from 'react'

//Responsive 
// import {}

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import HomeScreen from '../screens/HomeScreen'
import Challenges from '../screens/Challenges'
import Add from '../screens/Add'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: { 
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute', 
                paddingTop: 10,
                bottom: 40,
                left: 20,
                right: 20,
                // elevation: 0,
                backgroundColor: '#222222',
                borderRadius: 40,
                height: 60,
                ...styles.shadow
            },
            headerShown: false,
            tabBarShowLabel: false
            

          }}>

            <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('/Users/harikeeshan/Developer/CarbonMap/assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 40,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#B9FF66' : '#748c94', fontSize: 12
                        }}>
                            HOME
                        </Text> */}
                    </View>;
                }
            }}
            />
            <Tab.Screen name='Add' component={Add}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('/Users/harikeeshan/Developer/CarbonMap/assets/icons/Add.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#e32f45' : '#748c94', fontSize: 12
                        }}>
                            ADD
                        </Text> */}
                    </View>;
                }
            }}
            />
            <Tab.Screen name='Challenges' component={Challenges}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('/Users/harikeeshan/Developer/CarbonMap/assets/icons/challenges.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#e32f45' : '#748c94', fontSize: 12
                        }}>
                            CHALLENGES
                        </Text> */}
                    </View>;
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#22222',
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
    },
    
})