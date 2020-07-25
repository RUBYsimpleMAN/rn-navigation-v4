import React from 'react'
import {  Button,
          FlatList,
          ImageBackground,
          Text,
          View,
          StyleSheet } from 'react-native'

// import { DATA } from '../data';
// import Kartinka01 from '../../assets/imgs/image01.png'

const DATA = [
  {
    id: '1',
    img: '../../assets/imgs/image01.png',
    title: 'title_1_title',
    text: 'text:text:1:text:text',
    date: new Date().toJSON(),
    booked: true,
  },{
    id: '2',
    img: '../../assets/imgs/image02.png',
    title: 'title_2_title',
    text: 'text:text:2:text:text',
    date: new Date().toISOString(),
    booked: true,
  },{
    id: '3',
    img: '../../assets/imgs/image03.png',
    title: 'title_3_title',
    text: 'text:text:3:text:text',
    date: new Date().toISOString(),
    booked: false,
  },{
    id: '4',
    img: '../../assets/imgs/image04.png',
    title: 'title_4_title',
    text: 'text:text:4:text:text',
    date: new Date().toJSON(),
    booked: true,
  },{
    id: '5',
    img: '../../assets/imgs/image03-1.png',
    title: 'title_5_title',
    text: 'text:text:5:text:text',
    date: new Date().toISOString(),
    booked: false,
  },{
    id: '6',
    img: '../../assets/imgs/image01.png',
    title: 'title_6_title',
    text: 'text:text:6:text:text',
    date: new Date().toISOString(),
    booked: true,
  },{
    id: '7',
    img: '../../assets/imgs/image02.png',
    title: 'title_7_title',
    text: 'text:text:7:text:text',
    date: new Date().toJSON(),
    booked: true,
  }
]

export const Post = ({  }) => {
  const nowDate = new Date().toISOString()
  return (
  <View style={styles.postStyle}>
    <ImageBackground  source={DATA.img}
                      style={styles.imageStyle}>
      <View style={styles.textWrap}>
        <Text style={styles.centeredSubTitle} > {nowDate} </Text>
      </View>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
  postStyle:{
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: '1%',
    margin: '1%',
    width: '96%',
    // overflow: 'hidden'
  },
  textWrap:{
    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
    paddingVertical: 5,
    alignItems: 'center',
    width: '98%',
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
    height: 200
  }
});