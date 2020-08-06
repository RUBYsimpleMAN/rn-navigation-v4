import { LOAD_POSTS } from '../types/actionTypes'


const initialState = {
  allPostsState: [],
  bkmrkdPostsState: []
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return{
        ...state,
        allPostsState: action.payload,
        bkmrkdPostsState: action.payload.filter(post => post.booked)
      }

    default: return state
  }
}