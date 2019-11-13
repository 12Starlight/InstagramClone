import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { fetchComments } from "../../actions/comment_actions";
import { withRouter } from "react-router-dom";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users
  let post_id = ownProps.match.params.postId 
  const post = state.entities.posts[post_id] 
  const user = state.entities.users[post.author_id]
  let comments = [];
  
  if (post) {
    comments = Object.values(state.entities.comments).filter((comment) => (comment.post_id == post_id) )
  }

  return { users, user, comments, post, post_id }
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id)),
  fetchComments: (postId) => dispatch(fetchComments(postId)),
  createCommentLike: () => dispatch(createCommentLike()),
  deleteCommentLike: () => dispatch(deleteCommentLike())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));