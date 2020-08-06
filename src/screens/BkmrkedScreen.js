import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { PostList } from '../components/PostList'

export const BkmrkedScreen = ({ navigation }) => {
  const onOpenPostHandler = post => {
    navigation.navigate('Post', { postId: post.id,
                                  date:   post.date,
                                  booked: post.booked })
  }
  const bkmrkdPosts = useSelector(state => state.post.bkmrkdPostsState)
  return (
    <View>
      <Text style={styles.centeredSubTitle}>The Screen</Text>
      <Text style={styles.centeredTitle}>Bkmrked Screen</Text>
      <View>
      <PostList style={styles.viewFlatList}
                dataFromParent={bkmrkdPosts}
                onOpenFromParent={onOpenPostHandler} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

BkmrkedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Highlights',
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
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
