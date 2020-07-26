import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-navigation'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
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
      backgroundColor: THEME.NAVBAR_COLOR
      // backgroundColor: Platform.OS === 'android' ? THEME.NAVBAR_COLOR : THEME.TEXT_SHINE_COLOR
    },
    headerTintColor: THEME.TEXT_SHINE_COLOR
    // headerTintColor: Platform.OS === 'android' ? THEME.TEXT_SHINE_COLOR : THEME.NAVBAR_COLOR
  }
})

export const AppNavigation = createAppContainer(PostNavigator)