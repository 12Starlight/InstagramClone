import { connect } from "react-redux";
import PostIndexComment from "./post_index_comment";
import { fetchComments, deleteComment } from "../../actions/comment_actions";
import { withRouter } from "react-router-dom";

// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users;
  let post_id = ownProps.postId;
  const post = state.entities.posts[post_id];
  const user = state.entities.users[post.author_id];
  const currentUser = state.session.id; 
  let comments = [];

  if (post) {
    comments = Object.values(state.entities.comments).filter(
      comment => comment.post_id == post_id
    );
  }

  return { users, user, comments, post, post_id, currentUser };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  fetchComments: postId => dispatch(fetchComments(postId)),
  createCommentLike: () => dispatch(createCommentLike()),
  deleteCommentLike: () => dispatch(deleteCommentLike())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndexComment)
);
