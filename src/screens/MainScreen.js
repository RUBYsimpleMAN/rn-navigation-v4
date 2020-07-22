import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

import {Post} from '../components/Post'
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
  const goToPostButton = () => {
    navigation.navigate('Post')
    console.log(navigation)
  }
  return (
    <View style={styles.center}>

      {/* <Text style={styles.centeredSubTitle}>The Screen</Text>
      <Text style={styles.centeredTitle}>Main Screen</Text>
      <Button title='GoToPOST'
              onPress={goToPostButton} /> */}

      <FlatList data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post /> } />

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
    padding: 10
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
