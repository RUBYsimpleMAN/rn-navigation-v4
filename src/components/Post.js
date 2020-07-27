import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import { THEME } from '../theme/theme';


export const Post = ({ post, onOpenPost }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
                      onPress={() => onOpenPost(post)}>
     <View style={styles.postStyle}>
       <ImageBackground  source={{uri: post.img}}
                         style={styles.imageStyle}>
         <View style={styles.textWrap}>
           <Text style={styles.centeredSubTitle} > {post.date} </Text>
         </View>
       </ImageBackground>
     </View>
    </TouchableOpacity>
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
    color: THEME.TEXT_SHINE_COLOR
  },
  imageStyle:{
    width: '100%',
    height: 300
  }
});