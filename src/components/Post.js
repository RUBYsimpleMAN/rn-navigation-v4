import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Button,
          FlatList,
          ImageBackground,
          Text,
          View,
          StyleSheet } from 'react-native';
import { DATA } from '../data';

export const Post = ({ postFromData }) => {
  return <View style={styles.postStyle}>
    <ImageBackground  source={{ uri: postFromData.img }}
                      style={styles.imageStyle}>
      <View style={styles.textWrap}>
        <Text style={styles.centeredTitle} > { postFromData.date } </Text>
      </View>
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
  postStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    overflow: 'hidden'
  },
  textWrap:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
    // fontFamily: 'open-sans-normal',
    // fontSize: 32,
  },
  centeredTitle:{
    fontFamily: 'open-sans-normal',
    fontSize: 32,
  },
  centeredSubTitle:{
    fontFamily: 'open-sans-light',
    fontSize: 16,
  },
  imageStyle:{
    width: '100%',
    height: 200
  }
});