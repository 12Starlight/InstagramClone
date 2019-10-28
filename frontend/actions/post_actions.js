import * as PostApiUtil from "../util/posts_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const REMOVE_POST = "REMOVE_POST";


// regular actions
const receivePosts = response => ({
  type: RECEIVE_POSTS,
  posts: response.posts,  
  users: response.users
});

const receiveSinglePost = post => ({
  type: RECEIVE_SINGLE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

// Thunk Actions
export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then( response => dispatch(receivePosts(response)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then( response => dispatch(receiveSinglePost(response.post))) // remember the .then is returning the response
);

export const createPost = postSend => dispatch => (
  PostApiUtil.createPost(postSend).then( postReceive => dispatch(receiveSinglePost(postReceive)))
);

export const updatePost = postSend => dispatch => (
  PostApiUtil.updatePost(postSend).then( postReceive => dispatch(receiveSinglePost(postReceive)))
);

export const deletePost = (id) => dispatch => (
  PostApiUtil.deletePost(id).then( post => dispatch(removePost(post)))
);