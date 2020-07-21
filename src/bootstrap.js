import * as Font from 'expo-font'

export async function bootstrap(){
  await Font.loadAsync({
    'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
    'open-sans-normal': require('../assets/fonts/OpenSans-Regular.ttf')
  })
}