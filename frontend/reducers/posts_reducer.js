import { RECEIVE_POSTS, RECEIVE_SINGLE_POST, RECEIVE_POST_LIKE } from "../actions/post_actions";
import { merge } from "lodash";


const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const posts = {};

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, oldState, action.posts);
    case RECEIVE_SINGLE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post }); 
    case RECEIVE_POST_LIKE:
      return Object.assign({}, oldState, { [action.postId]: true })
    default:
      return oldState; 
  }
};


export default postsReducer;