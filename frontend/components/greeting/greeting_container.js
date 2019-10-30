import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";


// mapStateToProps
const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);