import { RECEIVE_POSTS, RECEIVE_SINGLE_POST, RECEIVE_POST_LIKE, REMOVE_POST, REMOVE_POST_LIKE } from "../actions/post_actions";
import { merge } from "lodash";


const _nulPost = Object.freeze({
  id: null
});

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  let post; 

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, oldState, action.posts);
    case RECEIVE_SINGLE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post }); 
    case RECEIVE_POST_LIKE:
      post = oldState[action.postId];
      return merge({}, oldState, { [action.postId]: {liked: true, likes: post.likes + 1}});
    case REMOVE_POST: 
      newState = Object.assign({}, oldState);
      delete newState[action.postId]
      // debugger; 
      return newState;
    case REMOVE_POST_LIKE: 
      post = oldState[action.postId];
      return merge({}, oldState, { [action.postId]: { liked: false, likes: post.likes - 1}});
    default:
      return oldState; 
  }
};


export default postsReducer;