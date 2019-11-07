import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_actions";


// mapStateToProps
const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = users[userId];
  return {
    currentUser: users[session.id],
    user: user,
    userId: userId 
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);