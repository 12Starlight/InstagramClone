import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";


// mapStateToProps 
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Sign Up Instead</Link>
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(login(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);