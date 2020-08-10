import { CREATE_POST, LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST } from '../types/actionTypes'


export const createPost = post => {
  post.id = Date.now().toString()
  return {
    type: CREATE_POST,
    payload: post
  }
}

export const loadPosts = () => {
  return{
    type: LOAD_POSTS,
    payload: []
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
