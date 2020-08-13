import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { THEME } from '../theme/theme';
import { toogleBooked, deletePost } from '../redux/actions/postActions';

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const postId = navigation.getParam('postId')
  const post = useSelector(state => state.post.allPostsState.find(p => p.id === postId))
  const booked = useSelector(state => state.post.bkmrkdPostsState.some(post => post.id === postId))

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const toggleHandler = useCallback(() => {
    dispatch(toogleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [toggleHandler])

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
          onPress: () => console.log("Pressed Post Alert cancel Button"),
          style: "cancel"
        },
        { text: "OK", onPress() {
          navigation.navigate('Main')
          dispatch(deletePost(postId))
        } }
      ],
      { cancelable: true }
    );
  }

  if (!post) return null

  return (
    <ScrollView>
      <View style={styles.center}>
        <Text style={styles.centeredTitle}> { postId } </Text>
        <Image  style={styles.imageStyle}
                source={{uri: post.img}} />
        <Text style={styles.centeredSubTitle}> { post.text } </Text>
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
  const booked = navigation.getParam('booked')
  const toggleHandler = navigation.getParam('toggleHandler')
  const customIconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Post from ' + new Date(postDate).toLocaleDateString(),
    headerStyle: {
      backgroundColor: 'navy'
    },
    headerTintColor: 'white',
    headerRight:  () => (<HeaderButtons HeaderButtonComponent={NavIconTemplate} >
                          <Item title='StarIcon'
                                iconName={customIconName}
                                onPress={toggleHandler} />
                        </HeaderButtons>)
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
