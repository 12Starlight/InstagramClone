import { RECEIVE_COMMENTS, RECEIVE_SINGLE_COMMENT, RECEIVE_COMMENT_LIKE, REMOVE_COMMENT, REMOVE_COMMENT_LIKE } from "../actions/comment_actions";
import { merge } from "lodash";


const _nulComment = Object.freeze({
  id: null
});

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let comment;

  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, oldState, { [action.comment.id]: action.comment });
    case RECEIVE_COMMENT_LIKE:
      comment = oldState[action.commentId];
      return merge({}, oldState, { [action.commentId]: {liked: true, likes: comment.likes + 1}});
    case REMOVE_COMMENT:
      return _nulComment;
    case REMOVE_COMMENT_LIKE:
      comment = oldState[action.commentId];
      return merge({}, oldState, { [action.commentId]: {liked: false, likes: comment.likes - 1}});
    default:
      return oldState;
  }
};


export default commentsReducer; 