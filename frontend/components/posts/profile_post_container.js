import { connect } from "react-redux";
import ProfilePosts from "./profile_posts";
import { fetchUserPosts, deletePost, updatePost } from "../../actions/post_actions";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.userId]
  let posts = [];
  
  if (user.postIds) {
    posts = user.postIds.map( postId => state.entities.posts[postId])
  }


  return({
    posts: posts,
    user: user 
  })
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
  deletePost: (id) => dispatch(deletePost(id)),
  updatePost: (post) => dispatch(updatePost(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);