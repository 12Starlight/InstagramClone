import React from "react";
import { Link } from "react-router-dom";
import Gear from "./gear"
import ProfilePostContainer from "../posts/profile_post_container";


class UserProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId); 
    this.props.fetchUserPosts(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
      this.props.fetchUserPosts(this.props.userId);
    }
  }

  render() {
    const { user, logout, postCount } = this.props;
    if (!user) {
      return "Loading ..."
    }

    debugger; 

    return (
      <div className="main"> 
        <div className="section-main">
          <div className="section-one">
            <div className="section-header">
              <div className="section-header-user">
                <div className="section-header-userpic"></div>
              </div>
              <div className='section-header-buttons-wrapper'>
                <div className="section-header-buttons-main">
                  <div className='section-header-username'>{user.username}</div>
                  <Gear logout={ logout } /> 
                </div>
                <div className="section-header-data">
                  <div><strong className="section-header-nums">Posts: {postCount}</strong></div>
                </div>
              </div>
            </div>
            <div className="section-one-sub1">
              <a href="#" className="section-one-sub1-divs"><div><i className="fas fa-th"></i></div><span>&nbsp; POSTS</span></a>
              <a href="/#/posts/new" className="section-one-sub1-divs"><div><i class="far fa-plus-square"></i></div><span>&nbsp; CREATE</span></a>
            </div>
            <div className="section-one-sub2">
              <ProfilePostContainer userId={ user.id }/>
            </div>
          </div>
        </div>

      </div>
    )


  }
};


export default UserProfile;





// <a href="#" className="section-one-sub1-divs"><div><i className="fab fa-youtube"></i></div><span>&nbsp; IGTV</span></a>
// <a href="#" className="section-one-sub1-divs"><div><i className="far fa-bookmark"></i></div><span>&nbsp; SAVED</span></a>
// <a href="#" className="section-one-sub1-divs"><div><i className="fas fa-user-astronaut"></i></div><span>&nbsp; TAGGED</span></a>

// <button className="section-header-button1">Edit Profile</button> & emsp;

// <div className="section-header-name">{user.username}</div>

// <hgroup className="header-group">
//   <h2 className="header-name">Hi, { user.username }!</h2>
//   <button className="header-button" onClick={ logout }>Log Out</button>
// </hgroup>