import React from "react";
import { Link } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";


class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayComment = this.displayComment.bind(this);
  }



  componentDidMount() {
    this.props.fetchComments(this.props.post_id)
  }

  displayComment() {
    // debugger; 
    if (this.props.post.description !== 'undefined') {
      return(
        <div className="main_comment_user_innerdiv div">
          <div
            role="button"
            tableindex="0"
            className="main_comment_user_icon_button_wrapper"
          >
            <div className="main_comment_user_icon_button">
              <Link to={`/users/${this.props.user.id}`}>
                <span className="main_comment_icon_span">
                  <i
                    alt={this.props.user.username + "'s profile picture"}
                    className="far fa-user-circle main_comment_icon img"
                  ></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="main_comment_description_wrapper div">
            <Link className="main_comment_description_username" to={`/users/${this.props.user.id}`}>
              <h2 className="h2">
                {this.props.user.username}
              </h2>
            </Link>
            <span className="main_comment_description span">
              {" " + this.props.post.description}
            </span>
            <div className="main_comment_time_wrapper">
              <div className="main_comment_time_innerdiv div">
                <time
                  className="main_comment_time time"
                  datetime=""
                  title=""
                >
                  {/*9h*/}
                </time>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }


  render() {
    const { comments, users, user, post } = this.props; 
    const allComments = comments.map((comment) => {  
    const commentUser = users[comment.user_id] 

      return (
          <CommentIndexItem 
            key={ comment.id }
            comment={ comment }
            user={ user }
            commentUser = { commentUser }
            post={ post }
            deleteComment={ this.props.deleteComment }
            createCommentLike={ this.props.createCommentLike }
            deleteCommentLike={ this.props.deleteCommentLike }
          />
      )
    });

    return (
      <ul className="main_comment_container">
        <div role="button" className="main_comment_div div">
          <li role="menuitem" className="main_comment_user li">
            <div className="main_comment_user_wrapper div">
              {this.displayComment()}
            </div>
          </li>
        </div>
        {allComments}
      </ul>
    );
  }
}


export default CommentIndex; 