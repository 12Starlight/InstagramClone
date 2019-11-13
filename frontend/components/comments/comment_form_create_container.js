import { connect } from "react-redux";
import CreateCommentForm from "./comment_form_create";
import { createComment } from "../../actions/comment_actions";
import { withRouter } from "react-router-dom";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const comment = { body: "", post_id: ownProps.match.params.postId }
  const formType = "Create Comment";
  return { comment, formType }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  action: (comment) => dispatch(createComment(comment))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm));