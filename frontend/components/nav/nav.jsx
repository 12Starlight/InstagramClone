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
            <div className="nav-icon-links">
              <i className="far fa-compass"></i>
            </div>
            <div className="nav-icon-links">
              <i className="far fa-heart"></i>
            </div>
            <Link to={`/users/${userId}`} className="nav_user_icon_link">
              <div className="nav-icon-links">
                <i className="far fa-user"></i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    );
  };
};



export default Nav;