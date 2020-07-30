import React from 'react'
import { createAppContainer, ThemeColors } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BkmrkedScreen } from '../screens/BkmrkedScreen.js'
import { THEME } from '../theme/theme'

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen
  }
},{
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      // backgroundColor: THEME.NAVBAR_COLOR
      backgroundColor: Platform.OS === 'android' ? THEME.NAVBAR_COLOR : THEME.TEXT_SHINE_COLOR
    },
    // headerTintColor: THEME.TEXT_SHINE_COLOR
    headerTintColor: Platform.OS === 'android' ? THEME.TEXT_SHINE_COLOR : THEME.NAVBAR_COLOR
  }
})

const BkmrkNavigator = createStackNavigator({
  Booked: BkmrkedScreen,
  Post:   PostScreen
},{
  // initialRouteName: 'Booked',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 22,
    },
    style: {
      backgroundColor: 'blue',
    },
  }
})

const BottomNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => (<Ionicons  name='ios-albums'
                                      size={25}
                                      color={info.tintColor} />)
    }
  },
  Booked: { 
    screen: BkmrkNavigator,
    navigationOptions: {
      tabBarIcon: info => (<Ionicons  name='ios-star'
                                      size={25}
                                      color={info.tintColor} />)
    }
  }
},{
  tabBarOptions: {
    activeTintColor: THEME.NAVBAR_COLOR
  }
})

export const AppNavigation = createAppContainer(BottomNavigator)
