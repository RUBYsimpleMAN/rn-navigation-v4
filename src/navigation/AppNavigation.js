import React from 'react'
import { createAppContainer, ThemeColors } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { BottomNavigation } from 'react-native-paper'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { BkmrkedScreen } from '../screens/BkmrkedScreen.js'
import { THEME } from '../theme/theme'


const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.NAVBAR_COLOR : THEME.TEXT_SHINE_COLOR
    },
    headerTintColor: Platform.OS === 'android' ? THEME.TEXT_SHINE_COLOR : THEME.NAVBAR_COLOR
  }
}

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen
},
  navigatorOptions
)

const BkmrkNavigator = createStackNavigator({
  Booked: BkmrkedScreen,
  Post:   PostScreen
},
  navigatorOptions
)

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все Посты',
      tabBarIcon: info => (<Ionicons  name='ios-albums'
                                      size={25}
                                      color={info.tintColor} />)
    }
  },
  Booked: { 
    screen: BkmrkNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => (<Ionicons  name='ios-star'
                                      size={25}
                                      color={info.tintColor} />)
    }
  }
}

const BottomNavigator = Platform.OS === 'android' ?
createMaterialBottomTabNavigator(
  bottomTabsConfig, {
  activeTintColor: THEME.TEXT_SHINE_COLOR,
  shifting: true,
  barStyle: {
    backgroundColor: THEME.NAVBAR_COLOR
  }
})
:
createBottomTabNavigator(
  bottomTabsConfig, {
  tabBarOptions: {
    activeTintColor: THEME.NAVBAR_COLOR
  }
})

const AboutNavigator = createStackNavigator({
  About: AboutScreen
}, navigatorOptions )

const CreateNavigator = createStackNavigator({
  Create: CreateScreen
}, navigatorOptions )

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator
  },
  About: {
    screen: AboutNavigator
  },
  Create: {
    screen: CreateNavigator
  }
})

export const AppNavigation = createAppContainer(MainNavigator)
