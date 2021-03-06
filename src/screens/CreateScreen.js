import { StatusBar } from 'expo-status-bar'
import React, { useState, useRef } from 'react'
import { Button, Image, Keyboard, ScrollView, Text, TextInput,
         TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { NavIconTemplate } from '../components/NavIconTemplate'
import { createPost } from '../redux/actions/postActions'
import { PhotoPicker } from '../components/PhotoPicker'
import { THEME } from '../theme/theme'

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [textState, setTextState] = useState('')
  const imgRef = useRef()

  const saveHandler = () => {
    const post = {
      date: new Date().toISOString(),
      text: textState,
      img:  imgRef.current,
      booked: false
    }
    dispatch(createPost(post))
    navigation.navigate('Main')
  }

  const photoPickHandler = uri => {
    imgRef.current = uri
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.center}>
    
          <Text style={styles.centeredTitle}>Создание нового поста</Text>
    
          <Text style={styles.centeredSubTitle}>The Screen</Text>
    
          <TextInput  style={styles.textarea}
                      placeholder='Формируем новый пост'
                      value={textState}
                      onChangeText={setTextState}
                      multiline
          />
    
          {/* <Image  style={styles.imgStyle}
                  source={{ uri: imgPath }} /> */}

          <PhotoPicker onPickCallBACK={photoPickHandler} />
    
          <Button title='Создать пост'
                  color={THEME.ACCEPT_COLOR}
                  onPress={saveHandler}
                  disabled={!textState} />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}


CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'New Instance',
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
    flex: 1,
    alignItems: 'center',
  },
  centeredTitle:{
    fontFamily: 'open-sans-normal',
    fontSize: 32,
  },
  centeredSubTitle:{
    fontFamily: 'open-sans-light',
    fontSize: 16,
  },
  textarea:{
    padding: 10,
    margin: 10,
  },
  imgStyle:{
    width: '100%',
    height: 300
  }
});
