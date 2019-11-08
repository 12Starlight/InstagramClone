import * as PostApiUtil from "../util/posts_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const RECEIVE_POST_LIKE = "RECEIVE_POST_LIKE";
export const REMOVE_POST = "REMOVE_POST";
export const REMOVE_POST_LIKE = "REMOVE_POST_LIKE"


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

const receivePostLike = (response) => {
  console.log(response);
    return ({
    type: RECEIVE_POST_LIKE,
    liked: true, 
    postId: response.likeable_id
  });
}

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

const removePostLike = (response) => ({
  type: REMOVE_POST_LIKE,
  liked: false,
  postId: response.likeable_id
});


// Thunk Actions
export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then( response => dispatch(receivePosts(response)))
);

export const fetchUserPosts = (userId) => dispatch => (
  PostApiUtil.fetchUserPosts(userId).then( response => dispatch(receivePosts(response)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then( response => dispatch(receiveSinglePost(response.post))) // remember the .then is returning the response
);

export const createPost = postSend => dispatch => (
  PostApiUtil.createPost(postSend).then( postReceive => dispatch(receiveSinglePost(postReceive)))
);

export const createPostLike = (postId) => dispatch => (
  PostApiUtil.createPostLike(postId).then( postReceive => dispatch(receivePostLike(postReceive))) 
);

export const updatePost = postSend => dispatch => (
  PostApiUtil.updatePost(postSend).then( postReceive => dispatch(receiveSinglePost(postReceive)))
);

export const deletePost = (id) => dispatch => (
  PostApiUtil.deletePost(id).then( post => dispatch(removePost(post)))
);

export const deletePostLike = (postId) => dispatch => (
  PostApiUtil.deletePostLike(postId).then( postReceive => dispatch(removePostLike(postReceive)))
);