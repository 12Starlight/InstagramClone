import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../actions/post_actions"


const mapStateToProps = (state, ownProps) => { //
  const post = state.entities.posts[ownProps.match.params.postId];
  let user;
  if (post) {
    user = state.entities.users[post.author_id]
  }

  return ({
    post: post,
    user: user
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);