import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'

export default function App() {
  const [isAppLoad, setIsAppLoad] = useState(false)
  
  if(!isAppLoad) {
    return <AppLoading  startAsync={bootstrap}
                        onFinish={() => setIsAppLoad(true)}
                        onError={err => console.log(err)} />
  }

  return <AppNavigation />

//   return (
// //   <View style={styles.container}>
//     <View>
//       <AppNavigation />
//       <StatusBar style="auto" />
//     </View>
//   );
}

// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
// });
