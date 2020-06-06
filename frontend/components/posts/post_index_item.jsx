import React from "react";
import { Link } from "react-router-dom";
import usersReducer from "../../reducers/users_reducer";
import PostLikeContainer from "./post_like_container";
import PostIndexCommentContainer from "../comments/post_index_comment_container";
import PostIndexCommentFormCreateContainer from "../comments/post_index_comment_form_create_container";


class PostIndexItem extends React.Component {
  
  componentDidMount() {
    // debugger 
    this.props.fetchComments(this.props.postId);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     this.props.fetchComments(this.props.postId);
  //   }
  // }


  render() {
    const { user, post, deletePost, userId } = this.props;

    return (
      <article className="post_index_article_container">
        {/* this makes it smaller,causing last button to disappear */}
        <header className="post_index_article_header">
          <div
            className="post_index_article_header_profileicon"
            role="button"
            tableindex="0"
          >
            <Link className="post_index_article_header_profileicon_link" to={`/users/${user.id}`}>
              <i className="fas fa-user-graduate"></i>
            </Link>
          </div>
          <div className="post_index_article_header_innerdiv">
            <div className="post_index_article_header_username_div">
              <div className="post_index_article_header_username_innerdiv">
                <h2>
                  <Link
                    className="post_index_article_header_username_h2"
                    title={user.username}
                    to={`/users/${user.id}`}
                  >
                    {user.username}
                  </Link>
                </h2>
              </div>
            </div>
            <div className="">
              <div>
                <img></img>
              </div>
              <div></div>
            </div>
          </div>
        </header>
        <div className="post_index_article_picture">
          <div
            role="button"
            tableindex="0"
            className="post_index_article_button"
          >
            <div className="post_index_article_button_innerdiv">
              <div className="post_index_article_button_innerinnerdiv">
                <img
                  src={post.photos}
                  className="post_index_article_button_img"
                />
              </div>
              <div className="post_index_article_button_imgdiv"></div>
            </div>
          </div>
        </div>
        <div className="post_index_article_data_wrapper">
          <section className="post_index_article_section_likes_container">
            <PostLikeContainer id={post.id} liked={post.liked} />
            <span className="post_index_article_section_likes_outerspan">
              <button className="post_index_article_section_likes_button">
                <span className="post_index_article_section_likes_innerspan">
                  <i className="far fa-comment"></i>
                </span>
              </button>
            </span>
            <span className="post_index_article_section_likes_outerspan">
              <button className="post_index_article_section_likes_button">
                <span className="post_index_article_section_likes_innerspan">
                  <i className="far fa-handshake"></i>
                </span>
              </button>
            </span>
            <span className="post_index_article_section_likes_outerspan_bookmark">
              <button className="post_index_article_section_likes_button">
                <span className="post_index_article_section_likes_innerspan_bookmark">
                  <i className="far fa-bookmark"></i>
                </span>
              </button>
            </span>
          </section>
          <section className="post_index_article_section_likescount_section_container">
            <div className="post_index_article_section_likescount_container">
              <div>
                <button className="post_index_article_section_likescount_button">
                  <span>{post.likes}</span> likes
                </button>
              </div>
            </div>
          </section>
 
          <PostIndexCommentContainer postId={post.id} /> 

          <div className="post_index_article_time_container">
            <a className="post_index_article_timelink">
              <time className="post_index_article_time_linkspan">
                9 hours ago
              </time>
            </a>
          </div>

          <PostIndexCommentFormCreateContainer postId={post.id} />
        </div>
        <div className="post_index_article_header_useroptions_container">
          <button className="post_index_article_header_userbutton">
            <span
              className="post_index_article_header_userspan"
              aria-label="More options"
            >
              ...
            </span>
          </button>
        </div>
      </article>
    );
  }
};


export default PostIndexItem;



// <li>
//   <Link to={`/posts/${post.id}`}>
//     {post.title}
//   </Link>&nbsp;
//       <Link to={`/posts/${post.id}/edit`}>
//     Edit
//       </Link>

//   <button onClick={() => deletePost(post.id)}>Delete</button>
// </li>


// <ul>
//   <div>
//     <li>
//       <div>
//         <div>
//           <div>
//             <h2><a href=""></a></h2>
//             <span>
//               <span>"Something worth pondering ...<a href=""></a></span>
//               <span>"...&nbsp;<button></button></span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </li>
//   </div>
//   <li><button>"View all "<span>8</span>" comments"</button></li>
//   <div>
//     <li>
//       <div>
//         <div>
//           <div>
//             <h3><a href="#"></a></h3>
//             <span><span><a href="#"></a></span></span>
//           </div>
//         </div>
//         <span>
//           <button><span></span></button>
//         </span>
//       </div>
//     </li>
//   </div>
//   <div>
//     <li>
//       <div>
//         <div>
//           <div>
//             <h3><a href="#"></a></h3>
//             <span><span>Not in my country :joy</span></span>
//           </div>
//         </div>
//         <span><button><span></span></button></span>
//       </div>
//     </li>
//   </div>
// </ul>

        // <section className="post_index_article_section_form_wrapper">
        //   <div className="post_index_article_section_form_container">
        //     <form className="post_index_article_section_form">
        //       <textarea
        //         className="post_index_article_section_formtext"
        //         aria-label="Add a comment..."
        //         placeholder="Add a comment..."
        //       ></textarea>
        //       <button
        //         className="post_index_article_section_formbutton"
        //         disabled
        //         type="submit"
        //       >
        //         Post
        //       </button>
        //     </form>
        //   </div>
        // </section>;

