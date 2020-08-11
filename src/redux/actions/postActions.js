import { CREATE_POST, LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST } from '../types/actionTypes'
import { ClassDB } from '../../SQLiteDB'


export const createPost = post => {
  post.id = Date.now().toString()
  return {
    type: CREATE_POST,
    payload: post
  }
}

export const loadPosts = () => {
  return async dispatch => {
    const postInThisFunction = await ClassDB.getPosts()
    dispatch({
      type: LOAD_POSTS,
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
    type: REMOVE_POST,
    payload: id
  }
}
