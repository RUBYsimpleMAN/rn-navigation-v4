import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  return (
    <View style={styles.center}>
      <Text style={styles.centeredTitle}> { postId } </Text>
      <StatusBar style="auto" />
    </View>
  );
}

PostScreen.navigationOptions = ({ navigation }) => {
  const postDate = navigation.getParam('date')
  return {
    headerTitle: 'Post from ' + new Date(postDate).toLocaleDateString(),
    headerStyle: {
      backgroundColor: 'navy'
    },
    headerTintColor: 'white'
  }
}

const styles = StyleSheet.create({
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
