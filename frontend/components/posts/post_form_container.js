import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const post = { title: "", description: "" };
  const formType = "Create Post";

  return { post, formType }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  action: (post) => dispatch(createPost(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);