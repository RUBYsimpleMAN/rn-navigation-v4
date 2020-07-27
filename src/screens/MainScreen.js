import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

import { Post } from '../components/Post'
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
  const onOpenPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
    console.log(navigation)
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
  headerTitle: 'Main Screen Title'
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
