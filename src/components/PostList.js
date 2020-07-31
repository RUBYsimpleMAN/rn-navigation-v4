import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import { Post } from '../components/Post'


export const PostList = ({ dataFromParent, onOpenFromParent }) => {
  return (
    <View>
      <FlatList data={dataFromParent}
        style={styles.viewFlatList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item}
                                        onOpenPost={onOpenFromParent} /> } />
    </View>
)}


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