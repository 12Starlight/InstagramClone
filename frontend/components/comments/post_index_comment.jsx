import React from "react";
import { Link } from "react-router-dom";
import PostIndexCommentItem from "./post_index_comment_item";

class PostIndexComment extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.post_id);
  }

  render() {
    const { comments, users, user, post } = this.props;
    const allComments = comments.map(comment => {
      const commentUser = users[comment.user_id];

      return (
        <PostIndexCommentItem
          key={comment.id}
          comment={comment}
          user={user}
          commentUser={commentUser}
          post={post}
          deleteComment={this.props.deleteComment}
          createCommentLike={this.props.createCommentLike}
          deleteCommentLike={this.props.deleteCommentLike}
        />
      );
    });

    return (
      <ul className="post_index_main_comment_container">
        <div role="button" className="post_index_main_comment_div div">
          <li role="menuitem" className="post_index_main_comment_user li">
            <div className="post_index_main_comment_user_wrapper div">
              <div className="post_index_main_comment_user_innerdiv div">
                <div className="post_index_main_comment_description_wrapper div">
                  <Link
                    className="post_index_main_comment_description_username"
                    to={`/users/${user.id}`}
                  >
                    <h2 className="h2">{user.username}</h2>
                  </Link>
                  <span className="post_index_main_comment_description span">
                    {" " + post.description}
                  </span>
                </div>
              </div>
            </div>
          </li>
          <Link to={`/posts/${post.id}`} className="post_index_main_comment_link"><li className="post_index_main_comment_button_wrapper li"><button className="post_index_main_comment_button">View all <span>{"?"}</span> comments</button></li></Link>
          {allComments[allComments.length - 1]}
          {allComments[allComments.length - 2]}
        </div>
      </ul>
    );
  }
}

export default PostIndexComment;
