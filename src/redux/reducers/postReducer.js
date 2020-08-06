import { LOAD_POSTS } from '../types/actionTypes'


const initialState = {
  allPosts: [],
  bkmrkPosts: []
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return{
        ...state,
        allPosts: action.payload,
        bkmrkPosts: action.payload.filter(post => post.booked)
      }

    default: return state
  }
}