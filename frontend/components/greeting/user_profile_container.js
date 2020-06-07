import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_actions";
import { fetchUserPosts } from "../../actions/post_actions";


// mapStateToProps
const mapStateToProps = ({ session, entities: { users, posts } }, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = users[userId];
  const postArray = Object.values(posts);
  let count = 0; 
  postArray.forEach((post) => {
    if (post.author_id === user.id) {
      count++; 
    }
   
    return count; 
  })

  return {
    currentUser: users[session.id],
    user: user,
    userId: userId,
    postCount: count
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

