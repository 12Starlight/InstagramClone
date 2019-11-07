import { connect} from "react-redux";
import { createPostLike } from "../../actions/post_actions";
import PostLike from "./post_like"


// mapStateToProps 
const mapStateToProps = (state, ownProps) => {
  return({
    likeId: "?",
    formType: "Create Like"
  })
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return({
    createPostLike: (likeId) => dispatch(createPostLike(likeId))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PostLike);