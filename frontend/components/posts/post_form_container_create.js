import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreatePostForm from "./post_form_create";
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


export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);