import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>

      <Text style={styles.centeredSubTitle}>The Screen</Text>
      <Text style={styles.centeredTitle}>About Screen</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredTitle:{
    fontFamily: 'open-sans-normal',
    fontSize: '32',
  },
  centeredSubTitle:{
    fontFamily: 'open-sans-light',
    fontSize: '16',
  }
});
