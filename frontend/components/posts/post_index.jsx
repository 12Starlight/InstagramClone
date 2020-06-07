import React from "react";
import PostIndexItem from "./post_index_item";
import postsReducer from "../../reducers/posts_reducer";


class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.fetchPosts();
    }
  }


  render() {
    const { users, postId } = this.props;
    const posts = this.props.posts.map(post => {
      const userId = post.author_id
      const user = users[userId]
      return(
        <PostIndexItem
          key={ post.id }
          post={ post }
          user={ user }
          postId={ post.id }
          deletePost={ this.props.deletePost }
          fetchComments={ this.props.fetchComments }
        />
      );
    });

    return(
      <div className="post_index_main_wrapper">
      <main className="post_index_main">
        <section className="post_index_section_innerbox">
          <div className="">{/* <ul>{posts}</ul> Not sure what to do with this yet */}
            <div className="post_index_section_left">
              <div className="post_index_article_wrapper"> {/* this container is larger */}
                { posts }
              </div>
            </div>

            <div></div>
          </div>

          <div></div> 
        </section>
        </main>
      </div>
    );
  }
}


export default PostIndex;


// <div className="post_index_section_right">
//   <div className="slider">
//     <div>1</div>
//     <div>2</div>
//     <div>3</div>
//     <div>4</div>
//     <div>5</div>
//     <div>6</div>
//     <div>7</div>
//     <div>8</div>
//     <div>9</div>
//   </div>
// </div>      