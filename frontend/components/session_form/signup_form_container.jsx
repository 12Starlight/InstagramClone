import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import whatever from "./session_form";


// mapStateToProps
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">Log In Instead</Link>
  };
};


// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    processForm: (user) => dispatch(signup(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(whatever); 