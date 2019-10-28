import React from "react";
import { Link } from "react-router-dom";
import Gear from "./gear"


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      {/* &nbsp allows me to create multiple space */}
      &nbsp; or &nbsp;
      <Link to="/signup">Sign Up!</Link>
    </nav>
  );

  const personalGreeting = () => (
    <div className="main"> 
      <div className="section-main">
        <div className="section-one">
          <div className="section-header">
            <div className="section-header-user">
              <div className="section-header-userpic"></div>
            </div>
            <div>
              <div className="section-header-buttons-main">
                {currentUser.username} &emsp;
                <button className="section-header-button1">Edit Profile</button> &emsp;
                <Gear logout={ logout } /> 
              </div>
              <div className="section-header-data">
                <div><strong className="section-header-nums">34</strong> posts</div>&emsp;&emsp;
                <div><strong className="section-header-nums">490</strong> followers</div>&emsp;&emsp;
                <div><strong className="section-header-nums">300</strong> following</div>
              </div>
              <div className="section-header-name">Dave Ganett</div>
            </div>
          </div>
          <div className="section-one-sub1">
            <a href="#" className="section-one-sub1-divs"><div><i className="fas fa-th"></i></div><span>&nbsp; POSTS</span></a>
            <a href="#" className="section-one-sub1-divs"><div><i className="fab fa-youtube"></i></div><span>&nbsp; IGTV</span></a>
            <a href="#" className="section-one-sub1-divs"><div><i className="far fa-bookmark"></i></div><span>&nbsp; SAVED</span></a>
            <a href="#" className="section-one-sub1-divs"><div><i className="fas fa-user-astronaut"></i></div><span>&nbsp; TAGGED</span></a>
          </div>
          <div className="section-one-sub2">
            <div className="pic pic1"></div>
            <div className="pic pic2"></div>
            <div className="pic pic3"></div>
          </div>
        </div>
      </div>

    </div>


    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, { currentUser.username }!</h2>
    //   <button className="header-button" onClick={ logout }>Log Out</button>
    // </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;