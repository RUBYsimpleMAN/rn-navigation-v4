import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import { Post } from '../components/Post'


export const PostList = ({ dataFromParent = [], onOpenFromParent }) => {
  if (!dataFromParent.length) {
    return(
      <View style={styles.center}>
        <Text  style={styles.centeredTitle}> ...ещё столько предстоит написать </Text>
      </View>
    )
  }
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
    padding: '10%'
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
});