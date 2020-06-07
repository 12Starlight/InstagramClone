import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component {

  render() {
    const { userId } = this.props; 

    return (
      <nav className="nav-main">
        <div className="nav-center">
          <div className="nav-one">
            <Link to="/" className="nav_user_icon_link">
              <div className="nav-icon"></div>
              <div className="nav-separator"></div>
              <div className="nav-logo"></div>
            </Link>
          </div>

          <div className="nav-two">
            <div>
              <textarea placeholder="Search" value=""></textarea>
            </div>
          </div>

          <div className="nav-icons nav-three">
            <ul className='nav-social-links'>
              <li><a href="https://www.linkedin.com/in/davegagnat/"><i className="fab fa-linkedin linkedin-color"></i></a></li>
              <li><a href="https://github.com/12Starlight"><i className="fab fa-github github-color"></i></a></li>
              <li><a href="https://twitter.com/hashtag/TheCodeEffect?src=hash"><i className="fab fa-twitter twitter-color"></i></a></li>
              <li><a href="https://angel.co/u/dave-gagnat"><i className="fab fa-angellist angellist-color"></i></a></li>
              <Link to={`/users/${userId}`} className="">
                <div className="">
                  <i className="far fa-user user-profile"></i>
                </div>
              </Link>
              <li><a href='https://www.davegagnat.com'><i className="fas fa-globe-americas world"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};



export default Nav;