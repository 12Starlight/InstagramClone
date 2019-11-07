import { fetchPosts, deletePost } from "../../actions/post_actions";
import { connect } from "react-redux";
import PostIndex from "./post_index";


// mapStateToProps
const mapStateToProps = (state, ownProps) => ({
  posts: Object.keys(state.entities.posts).map( key => state.entities.posts[key]),
  users: state.entities.users 
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);


// const userId = ownProps.match.params.userId;
// const user = users[userId];
// return {
//   currentUser: users[session.id],
//   user: user,
//   userId: userId
// };