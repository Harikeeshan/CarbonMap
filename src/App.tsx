import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Components
import gettingStarted from './components/GettingStarted'
import LoginScreen from './components/LoginScreen'
import Tabs from './components/Tabs'
import HomeScreen from './screens/HomeScreen'

export type RootStackParamList = {
  gettingStarted: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='gettingStarted' screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen 
          name='gettingStarted'
          component={gettingStarted}
          />
        <Stack.Screen 
          name='LoginScreen'
          component={LoginScreen}
          />
        <Stack.Screen
        name='Tabs'
        component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})