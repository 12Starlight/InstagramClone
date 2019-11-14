import { connect } from "react-redux";
import PostIndexCommentFormCreate from "./post_index_comment_form_create";
import { createComment } from "../../actions/comment_actions";
import { withRouter } from "react-router-dom";

// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // debugger
  const comment = {
    body: "",
    post_id: ownProps.postId
  };
  const formType = "Create Comment";
  return { comment, formType };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndexCommentFormCreate)
);
