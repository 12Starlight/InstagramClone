import React from "react";


class PostLike extends React.Component {
  constructor(props) {
    super(props)

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    e.preventDefault();
    
    if (this.props.liked) {
      this.props.deletePostLike(this.props.id);
    } else {
      this.props.createPostLike(this.props.id);
    }
  }

  render() {
    const { liked } = this.props  
    if (liked) {
      return (
        <span className="post_index_article_section_likes_outerspan">
          <button
            className="post_index_article_section_likes_button"
            onClick={this.handleLike}
          >
            <span className="post_index_article_section_likes_innerspan_heart red">
              <i className="fas fa-heart"></i>
            </span>
          </button>
        </span>
      )
    } else {
      return (
        <span className="post_index_article_section_likes_outerspan">
          <button
            className="post_index_article_section_likes_button"
            onClick={this.handleLike}
          >
            <span className="post_index_article_section_likes_innerspan_heart">
              <i className="fas fa-heart"></i>
            </span>
          </button>
        </span>
      )
    }
  }
} 


export default PostLike;