import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, ScrollView, Text, View, StyleSheet } from 'react-native';

import { DATA } from '../data';
import { THEME } from '../theme/theme';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const postDATA = DATA.find(p => p.id === postId)
  const rmPostHandler = () => {
    Alert.alert(
      "Будем удалять?!.",
      "Точно-преточно?..",
      [
        {
          // text: "Ask me later",
          // onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );
  }
  return (
    <ScrollView>
      <View style={styles.center}>
        <Text style={styles.centeredTitle}> { postId } </Text>
        <Image  style={styles.imageStyle}
                source={{uri: postDATA.img}} />
        <Text style={styles.centeredSubTitle}> { postDATA.text } </Text>
        <Button title='Удалить пост'
                color={THEME.DANGER_COLOR}
                onPress={rmPostHandler} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
  },
  imageStyle:{
    width: '100%',
    height: 300
  }
});
