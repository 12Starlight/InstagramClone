import { RECEIVE_POSTS, RECEIVE_SINGLE_POST } from "../actions/post_actions";
import { merge } from "lodash";


const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const posts = {};

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, oldState, action.posts);
    case RECEIVE_SINGLE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post }); 
    default:
      return oldState; 
  }
};


export default postsReducer;