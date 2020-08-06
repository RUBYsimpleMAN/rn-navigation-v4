import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST } from '../types/actionTypes'


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

    case TOGGLE_BOOKED:
      const allPostsState = state.allPostsState.map(post => {
        if (post.id === action.payload) {
          post.booked = !post.booked
        }
        return post
      })
      return{
        ...state,
        allPostsState,
        bkmrkdPostsState: allPostsState.filter(post => post.booked)
      }

    case REMOVE_POST:
      return {
        ...state,
        allPostsState: state.allPostsState.filter(p => p.id !== action.payload),
        bkmrkdPostsState: state.bkmrkdPostsState.filter(p => p.id !== action.payload)
      }

    default: return state
  }
}