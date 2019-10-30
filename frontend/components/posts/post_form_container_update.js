import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostForm from "./post_form_update";
import { updatePost, fetchPost } from "../../actions/post_actions";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  const defaultPost = { title: "", description: "" };
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId] || defaultPost;
  const formType = "Update Post";

  return { post, formType };
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  action: (post) => dispatch(updatePost(post)),
  fetchPost: (id) => dispatch(fetchPost(id))
});


class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.postId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post.postId != this.props.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId);
    }
  }


  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm
        action={ action }
        formType={ formType }
        post={ post }
      />
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);