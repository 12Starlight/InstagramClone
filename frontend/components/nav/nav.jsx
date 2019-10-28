import React from "react";


const Nav = () => {
  return(
    <nav className="nav-main">
      <div className="nav-center">
        <div className="nav-one">
          <div className="nav-icon"></div>
          <div className="nav-separator"></div>
          <div className="nav-logo"></div>
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
          <div className="nav-icon-links">
            <i className="far fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}; 


export default Nav;