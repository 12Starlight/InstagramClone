import React from "react";

class Gear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.ref = null;
  }

  open() {
    this.setState({
      open: true
    })
  }

  close(e) {
    if (!this.ref.contains(e.target)) {
        this.setState({
        open: false
      })
    }
  }

  
  render() {
    return (
      <div className="gear-dropdown">
        <button onClick={ this.open } className="gear"><span><i className="fas fa-cog"></i></span></button>
        { this.state.open ? (
          <>
            <div className="modal" onClick={ this.close }>
              <ul className="gear-dropdown-menu" ref={(ref) => this.ref = ref} >
                <li className="gear-dropdown-items" onClick={this.props.logout}>Logout</li>
              </ul>
            </div>
          </>
          ) : null }
          </div>
          )
        }
}


export default Gear;

              // <li className="gear-dropdown-items">Nametag</li>
              // <li className="gear-dropdown-items">Authorized Apps</li>
              // <li className="gear-dropdown-items">Notifications</li>
              // <li className="gear-dropdown-items">Privacy and Security</li>
              // <li className="gear-dropdown-items">Login Activity</li>
              // <li className="gear-dropdown-items">Emails from Instagram</li>



// <li className="gear-dropdown-items">Change Password</li>

// <li>
//   <Link to={`/posts/${post.id}`}>
//     {post.title}
//   </Link>&nbsp;
//       <Link to={`/posts/${post.id}/edit`}>
//     Edit
//       </Link>

//   <button onClick={() => deletePost(post.id)}>Delete</button>
// </li>