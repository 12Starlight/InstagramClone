import * as CommentApiUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";


// regular actions
const receiveComments = response => ({
  type: RECEIVE_COMMENTS,
  comments: response.comments,
  users: response.users
});

const receiveSingleComment = (response) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment: response.comment,
  user: response.user 
});

const receiveCommentLike = (response) => {
  console.log(response);
  return({
    type: RECEIVE_COMMENT_LIKE,
    liked: true,
    commentId: response.likeable_id
  });
}

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id  
});

const removeCommentLike = (response) => ({
  type: REMOVE_COMMENT_LIKE,
  liked: false,
  commentId: response.likeable_id
});


// Thunk Actions
export const fetchComments = (postId) => dispatch => (
  CommentApiUtil.fetchComments(postId).then( response => {
    if (!response.comments) {
      console.log(postId)
    }
    dispatch(receiveComments(response ))
  })
);

export const fetchComment = (id) => dispatch => (
  CommentApiUtil.fetchComment(id).then( response => dispatch(receiveSingleComment(response.comment )))
);

export const createComment = (commentSend) => dispatch => (
  CommentApiUtil.createComment(commentSend).then( response => dispatch(receiveSingleComment(response )))
);

export const createCommentLike = (commentId) => dispatch => (
  CommentApiUtil.createCommentLike(commentId).then( commentReceive => dispatch(receiveCommentLike(commentReceive )))
);

export const deleteComment = (id) => dispatch => (
  CommentApiUtil.deleteComment(id).then( comment => dispatch(removeComment(comment)))
);

export const deleteCommentLike = (commentId) => dispatch => (
  CommentApiUtil.deleteCommentLike(commentId).then( commentReceive => dispatch(removeCommentLike(commentReceive )))
);