import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export const MainScreen = ({ navigation }) => {
  const goToPostButton = () => {
    navigation.navigate('Post')
    console.log(navigation)
  }
  return (
    <View style={styles.center}>

      <Text style={styles.centeredSubTitle}>The Screen</Text>
      <Text style={styles.centeredTitle}>Main Screen</Text>
      <Button title='GoToPOST'
              onPress={goToPostButton} />

      <StatusBar style="auto" />
    </View>
  );
}

MainScreen.navigationOptions = {
  headerTitle: 'MainScrTitle'
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
