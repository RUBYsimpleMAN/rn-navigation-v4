import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { DATA } from '../data';
import { THEME } from '../theme/theme';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const postDATA = DATA.find(p => p.id === postId)

  // useEffect(() => {
  //   navigation.setParams({ booked: postDATA.booked })
  // }, [])

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
        { text: "OK", onPress: () => console.log("Pressed Post Alert OK Button") }
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
  const booked = navigation.getParam('booked')
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
                                onPress={() => console.log('Pressed NavMenu Right Button (star)')} />
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
