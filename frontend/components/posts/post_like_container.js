import { connect} from "react-redux";
import { createPostLike, deletePostLike } from "../../actions/post_actions";
import PostLike from "./post_like"


// mapStateToProps 
const mapStateToProps = (state, ownProps) => {
  return({

  })
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return({
    createPostLike: (postId) => dispatch(createPostLike(postId)),
    deletePostLike: (postId) => dispatch(deletePostLike(postId))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PostLike);