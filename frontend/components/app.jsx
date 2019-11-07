import React from "react";
import { Provider } from "react-redux";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";

import UserProfileContainer from "./greeting/user_profile_container";
import Nav from "./nav/nav"
import LogInFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import CreatePostFormContainer from "./posts/post_form_container_create";
import EditPostFormContainer from "./posts/post_form_container_update";
import { AuthRoute, LoggedInRoute, ProtectedRoute } from "../util/route_util";
import PostShowContainer from "./posts/post_show_container";
import PostIndexContainer from "./posts/post_index_container";
import ProfilePostContainer from "./posts/profile_post_container";


const App = () => (
  <div>
      <LoggedInRoute path="/" component={ Nav } />
    <Switch>
      <AuthRoute exact path="/login" component={ LogInFormContainer } />
      <AuthRoute exact path="/signup" component={ SignupFormContainer } />
      <ProtectedRoute exact path="/posts/new" component={ CreatePostFormContainer }/>
      <ProtectedRoute exact path="/posts/:postId/edit" component={EditPostFormContainer} />
      <ProtectedRoute path="/posts/:postId" component={ PostShowContainer } />
      <ProtectedRoute path="/users/:userId" component={ UserProfileContainer }/>
      <ProtectedRoute exact path="/" component={ PostIndexContainer } />
    </Switch>
  </div>
);
      
      
export default App;


      