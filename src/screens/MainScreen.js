import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { PostList } from '../components/PostList'
import { loadPosts } from '../redux/actions/postActions'

export const MainScreen = ({ navigation }) => {
  const onOpenPostHandler = post => {
    navigation.navigate('Post', { postId: post.id,
                                  date:   post.date,
                                  booked: post.booked })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const allPostsState = useSelector(state => state.post.allPosts)

  return (
    <View>
      <View>
        <PostList // style
                  dataFromParent={allPostsState}
                  onOpenFromParent={onOpenPostHandler} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}


MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Main Screen Title',
  headerLeft:  () => (<HeaderButtons HeaderButtonComponent={NavIconTemplate} >
                        <Item title='menu'
                              iconName='ios-menu'
                              onPress={() => navigation.toggleDrawer()} />
                      </HeaderButtons>),
  headerRight:  () => (<HeaderButtons HeaderButtonComponent={NavIconTemplate} >
                        <Item title='camera'
                              iconName='ios-camera'
                              onPress={() => navigation.push('Create')} />
                      </HeaderButtons>),
})

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
