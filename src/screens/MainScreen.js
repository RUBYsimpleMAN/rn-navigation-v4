import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { DATA } from '../data'
import { PostList } from '../components/PostList'

export const MainScreen = ({ navigation }) => {
  const onOpenPostHandler = post => {
    navigation.navigate('Post', { postId: post.id,
                                  date:   post.date,
                                  booked: post.booked })
  }
  return (
    <View>
      <View>
        <PostList // style
                  dataFromParent={DATA}
                  onOpenFromParent={onOpenPostHandler} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}


MainScreen.navigationOptions = {
  headerTitle: 'Main Screen Title',
  headerLeft:  () => (<HeaderButtons HeaderButtonComponent={NavIconTemplate} >
                        <Item title='menu'
                              iconName='ios-menu'
                              onPress={() => console.log('Pressed Header NavMenu Left Button (menu)')} />
                      </HeaderButtons>),
  headerRight:  () => (<HeaderButtons HeaderButtonComponent={NavIconTemplate} >
                        <Item title='camera'
                              iconName='ios-camera'
                              onPress={() => console.log('Pressed Header NavMenu Right Button (camera) ')} />
                      </HeaderButtons>),
}

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '1%'
  },
  viewFlatList: {
    paddingBottom: 300,
    // marginBottom: 220
  },
  centeredTitle:{
    fontFamily: 'open-sans-normal',
    fontSize: 32,
  },
  centeredSubTitle:{
    fontFamily: 'open-sans-light',
    fontSize: 16,
  }
});
