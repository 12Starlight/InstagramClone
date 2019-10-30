import React from "react";
import { Link } from "react-router-dom";
import usersReducer from "../../reducers/users_reducer";
import PostShowContainer from "./post_show_container";


const ProfilePostItem = ({ user, post, deletePost, updatePost }) => {
  return(
    <div className="">
      <div role="button">
        <Link to={ `/posts/${post.id}` }>
          <img className="profile_post_item" src={post.photos[0]}></img>
        </Link>  
      </div>
    </div>
  )
}


export default ProfilePostItem;


// <li>
//   <Link to={`/posts/${post.id}`}>
//     {post.title}
//   </Link>&nbsp;
//               <Link to={`/posts/${post.id}/edit`}>
//     Edit
//               </Link>

//   <button onClick={() => deletePost(post.id)}>Delete</button>
// </li>