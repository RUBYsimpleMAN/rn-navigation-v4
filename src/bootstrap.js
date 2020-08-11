import * as Font from 'expo-font'
import { ClassDB } from './SQLiteDB'

export async function bootstrap(){
  try {
    await Font.loadAsync({
      'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-normal': require('../assets/fonts/OpenSans-Regular.ttf')
    })
    await ClassDB.init()
    console.log('Database started!')}
  catch (e) {
    console.log('Error: ', e)
  }
}
