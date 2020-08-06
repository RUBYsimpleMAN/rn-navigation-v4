import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View } from 'react-native'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'

import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'
import { postStore } from './src/redux/store/postStore'

export default function App() {
  const [isAppLoad, setIsAppLoad] = useState(false)
  
  if(!isAppLoad) {
    return <AppLoading  startAsync={bootstrap}
                        onFinish={() => setIsAppLoad(true)}
                        onError={err => console.log(err)} />
  }

  // return <AppNavigation />

  return( <Provider store={postStore}>
            <AppNavigation>
              <View>
                <StatusBar style="auto" />
              </View>
            </AppNavigation> 
          </Provider>)
}

// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
// });
