import React from "react";
import ProfilePostItem from "./profile_post_item";
import postsReducer from "../../reducers/posts_reducer";


class ProfilePosts extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUserPosts(this.props.userId);
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     this.props.fetchUserPosts(this.props.userId);
  //   }
  // }
  

  render() {
    const { user } = this.props;
    const posts = this.props.posts.map(post => {
      return (
        <ProfilePostItem
          key={post.id}
          post={post}
          user={user}
          userId={this.props.userId}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          fetchUserPosts={this.props.fetchUserPosts}
        />
      );
    });

    return <div className="profile_posts_wrapper">{posts}</div>;
  }
}


export default ProfilePosts;