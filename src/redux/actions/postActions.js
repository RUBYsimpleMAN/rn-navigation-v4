import * as FileSystem from 'expo-file-system'

import { CREATE_POST, READ_POSTS, TOGGLE_BOOKED, DELETE_POST } from '../types/actionTypes'
import { ClassDB } from '../../SQLiteDB'


export const createPost = post => async dispatch => {
  const fileNameExists = post.img.split('/').pop()
  const newPathForPict = FileSystem.documentDirectory + fileNameExists
  try {
    await FileSystem.moveAsync({
      to:   newPathForPict,
      from: post.img
    })
  }
  catch (catchedError) {
    console.log('Error: ', catchedError)
  }

  const payload = {...post, img: newPathForPict}
  const id = await ClassDB.createPost(payload)

  payload.id = id

  dispatch({
    type: CREATE_POST,
    payload
  })
}

export const loadPosts = () => {
  return async dispatch => {
    const postInThisFunction = await ClassDB.getPosts()
    dispatch({
      type: READ_POSTS,
      payload: postInThisFunction
    })
  }
}

export const toogleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  }
}

export const rmPost = id => {
  return {
    type: DELETE_POST,
    payload: id
  }
}
