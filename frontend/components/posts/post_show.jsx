import React from "react";
import { Link } from "react-router-dom";
import postsReducer from "../../reducers/posts_reducer";


class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId); 
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.postId != this.props.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId);
    }
  }


  render() {
    const { post, user } = this.props;
    if (!post) {
      return <div>Loading ...</div>
    }

    return (
      <div className="post_show_wrapper">
        <div className="post_show_main"></div>
        <div className="post_show_inner_box">
          <div className="post_show_photo_container">
            <img className="post_show_photo" src={ post.photos[0] } />
          </div>
          
          <div className="post_show_data_container">
            
            <div className="post_show_header">{/* Title/description */}
              <div className="post_show_icon_container"><span><i className="far fa-user-circle icon"></i></span></div>
              <div className="post_show_userprofile_container">
                <div className="post_show_userdata_container">
                  <div className="post_show_username_container"><h3><a className="post_show_username" href="#">{user.username}</a></h3></div> {/* text-decoration: none; */}
                  <div className="post_show_following_container">
                    <div className="post_show_dot">.</div>
                    <button className="post_show_following">Following</button> {/* appearance: none; */}
                  </div>
                </div>  
                <div className="post_show_button_wrapper">
                  <div className="post_show_button_main"></div>
                  <div className="post_show_button_container"><button className="post_show_button"><span className="post_show_span">...</span></button></div>
                </div>
              </div>
            </div>
            
            <div className="post_show_comments_wrapper">
              <ul className="post_show_comments_container">
                <div roll="button" className="post_show_comments">
                  <li roll="menuitem" className="post_show_comments_menuitem">
                    <div className="post_show_comments_data">
                      <div className="post_show_icon_container"><span className=""><i class="far fa-user-circle comments_icon"></i></span></div>
                      <div className="post_show_comments_data_container"><a className="post_show_comments_data_username" href="#">{user.username}</a><span className="post_show_comments_data_desc">{post.description}<a className="post_show_comments_data_hash" href="#">#</a></span></div>
                    </div>
                  </li>
                  <div className="post_show_comments_data_hours">17h</div>  
                </div>
              </ul>


              {/*
              <div className=""> 
                <p><span>{user.username}</span> { post.description }</p>
              </div>

              <div className="post_show_commments_container">
                <ul> 
                  <li>Comment 1 ...</li>
                  <li>Comment 2 ...</li>
                  <li>Comment 3 ...</li>
                  <Link to="/">Back To Index</Link>  
                </ul>
              </div>
              */}  
              
              <div className="post_show_section_container">
                <section className="post_show_likes_section_container">
                  <span className="post_show_likes_section_outerspan"><button className="post_show_likes_section_button"><span className="post_show_likes_section_innerspan_heart"><i class="fas fa-heart inner"></i></span></button></span>
                  <span className="post_show_likes_section_outerspan"><button className="post_show_likes_section_button"><span className="post_show_likes_section_innerspan"><i class="far fa-comment inner"></i></span></button></span>
                  <span className="post_show_likes_section_outerspan"><button className="post_show_likes_section_button"><span className="post_show_likes_section_innerspan"><i class="far fa-handshake inner"></i></span></button></span>
                  <span className="post_show_likes_section_outerspan_bookmark"><button className="post_show_likes_section_button"><span className="post_show_likes_section_innerspan_bookmark"><i class="far fa-bookmark inner"></i></span></button></span>
                </section>

                <section className="post_show_likescount_section_container">
                  <div className="post_show_likescount_container"><div ><button className="post_show_likescount_button"><span>9,341</span> likes</button></div></div>
                </section>
                <div className="post_show_time_container"><a className="post_show_timelink"><time className="post_show_time_linkspan">13 hours ago</time></a></div>
              </div>
              
              <section className="post_show_section_form_wrapper">
                <div className="post_show_section_form_container">
                  <form className="post_show_section_form">
                    <textarea aria-label="Add a comment..." placeholder="Add a comment..." className="post_show_section_formtext" ></textarea>
                    <button className="post_show_section_formbutton" disabled type="submit">Post</button>
                  </form>
                </div>
              </section>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}


export default PostShow;


