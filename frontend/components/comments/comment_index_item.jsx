import React from "react";
import { Link } from "react-router-dom";


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.switch = this.switch.bind(this);
  }

  switch(){
    // debugger; 
    if (this.props.currentUser !== this.props.comment.user_id) {
      return(
        <div></div>
      )
    } else {
      return(
        <div className='comment_index_item_delete_wrapper'>
          <button className='comment_index_item_delete' onClick={() => this.props.deleteComment(this.props.comment.id)} ><i class="fas fa-trash-alt comment_index_item_delete_icon"></i></button>
        </div>
      )
    }
  }


  render() {
    const { user, comment, commentUser, post, deleteComment, createCommentLike, deleteCommentLike } = this.props;

    return (
      <ul className="comment_index_item_wrapper">
        <div role="button" className="comment_index_item_button_wrapper div">
          <li role="menuitem" className="comment_index_item_button_container li">
            <div className="comment_index_item_container_outerdiv div">
              <div className="comment_index_item_container_innerdiv div">
                <div
                  role="button"
                  tabIndex="0"
                  className="comment_index_item_user_icon_button_wrapper div"
                >
                  <div className="comment_index_item_user_icon_button">
                    <Link to={`/users/${comment.user_id}`}>
                      <span className="comment_index_item_icon_span">
                        <i
                          alt={user.username + "'s profile picture"}
                          className="far fa-user-circle comment_index_item_icon img"
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="comment_index_item_main_content_wrapper">

                  <div className="comment_index_item_main_content_inner">
                    <p className="comment_index_item_description">
                      <span className='comment_index_item_body'>
                        <Link className="comment_index_item_h3" to={`/users/${comment.user_id}`}>
                          <span className="">{commentUser.username}</span>
                        </Link>
                        <span>{" " + comment.body}  </span>
                      </span>
                    </p>
                  </div>
                  <div className="comment_index_item_time_wrapper">
                    <div className="comment_index_item_time_container div">
                      <time className="comment_index_item_time time">{/*3h*/}</time>
                      <button className="comment_index_item_likes">
                        {/*? likes*/}
                      </button>
                      <button className="comment_index_item_reply">{/*Reply*/}</button>
                    </div>
                  </div>
                </div>
                {this.switch()}
              </div>

              <div></div>

            </div>
          </li>
        </div>
      </ul>
    ); 
  }
};


export default CommentIndexItem; 

// <span className="comment_index_item_likes_button_wrapper">
//   <button className="comment_index_item_likes_button">
//     <span className="post_index_article_section_likes_innerspan_heart red">
//       <i className="fas fa-heart"></i>
//     </span>
//   </button>
// </span>