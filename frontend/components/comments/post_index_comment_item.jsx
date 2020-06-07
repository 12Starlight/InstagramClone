import React from "react";
import { Link } from "react-router-dom";

const PostIndexCommentItem = ({
  user,
  comment,
  commentUser,
  post,
  deleteComment,
  createCommentLike,
  deleteCommentLike
}) => {
  return (
    <ul className="post_index_comment_item_wrapper">
      <div role="button" className="post_index_comment_item_button_wrapper div">
        <li role="menuitem" className="post_index_comment_item_button_container li">
          <div className="post_index_comment_item_container_outerdiv div">
            <div className="post_index_comment_item_container_innerdiv div">
              <div className="post_index_comment_item_main_content_wrapper div">
                <Link
                  className="post_index_comment_item_h3"
                  to={`/users/${comment.user_id}`}
                >
                  <h3 className="h3">{commentUser.username}</h3>
                </Link>
                <span className="post_index_comment_item_description span">
                  {" " + comment.body}
                </span>
              </div>
            </div>

            <div></div>
            <span className="post_index_comment_item_likes_button_wrapper">
              <button className="post_index_comment_item_likes_button">
                <span className="post_index_article_section_likes_innerspan_heart red">
                  <i className=""></i>
                </span>
              </button>
            </span>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default PostIndexCommentItem;
