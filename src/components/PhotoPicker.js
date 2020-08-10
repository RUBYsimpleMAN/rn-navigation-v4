import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Button, Image, Keyboard, ScrollView,
         TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'


async function askForPermissions() {
  const {status} = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  )
  if (status !== 'granted') {
    Alert.alert('Ошибка, Вы не разрешили использовать камеру')
    return false
  }
  return true
}

export const PhotoPicker = ({ onPickCallBACK }) => {
  const [imageState, setImageState] = useState(null)

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions()
    if (!hasPermissions) {
      return
    }
    const imgSettings = await ImagePicker.launchCameraAsync({
      quality: 0.9,
      allowsEditing: false,
      aspect: [18, 9]
    })
    setImageState(imgSettings.uri)
    onPickCallBACK(imgSettings.uri)
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Сделать фото' onPress={takePhoto} />
      {imageState && <Image style={styles.imgStyle} source={{uri: imageState}} />}
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  centeredTitle:{
    fontFamily: 'open-sans-normal',
    fontSize: 32,
  },
  centeredSubTitle:{
    fontFamily: 'open-sans-light',
    fontSize: 16,
  },
  imgStyle:{
    width: '100%',
    height: 300,
    margin: 10,
  }
});
