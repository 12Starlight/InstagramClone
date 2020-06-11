import { connect } from "react-redux";
import PostShow from "./post_show";
import { deletePost, fetchPost } from "../../actions/post_actions";


const mapStateToProps = (state, ownProps) => { 
  // const postId = ownProps.match.params.postId;
  const post = state.entities.posts[ownProps.match.params.postId];
  let user;
  if (post) {
    // user = state.entities.users[post.author_id]
    user = state.entities.users[post.author_id] 
  }

  return ({
    post: post,
    user: user,
    currentUser: state.session.id 
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({ 
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (id) => dispatch(deletePost(id))  
  })
};

// debugger 
export default connect(mapStateToProps, mapDispatchToProps)(PostShow);