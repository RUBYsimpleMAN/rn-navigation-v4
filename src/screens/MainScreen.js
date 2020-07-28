import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderTopLeftMenuIcon } from '../components/HeaderTopLeftMenuIcon'
import { Post } from '../components/Post'
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
  const onOpenPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  }
  return (
    <View>
      <View>
        <FlatList data={DATA}
                  style={styles.viewFlatList}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={post => post.id.toString()}
                  renderItem={({ item }) => <Post post={item}
                                                  onOpenPost={onOpenPostHandler} /> } />
  
        <StatusBar style="auto" />
      </View>
    </View>
  );
}


MainScreen.navigationOptions = {
  headerTitle: 'Main Screen Title',
  headerRight:  () => (<HeaderButtons HeaderButtonComponent={HeaderTopLeftMenuIcon} >
                  <Item title='TakePhoto'
                        iconName='ios-camera'
                        onPress={() => console.log('Pressed HeaderTopRightNavMenuButton')} />
                </HeaderButtons>)
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
