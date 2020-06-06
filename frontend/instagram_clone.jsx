// React Imports
import React from "react";
import ReactDOM from "react-dom";
import { login, signup, logout } from "./util/session_api_util"
import { fetchFollowers, fetchFollower, createFollower, deleteFollower } from "./util/followers_api_util";


// Component Imports
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
  // let store = configureStore();

  // // Testing Start
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login; 
  // window.signup = signup;
  // window.logout = logout 
  // // Testing End


  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store; 
  let root = document.getElementById("root");


  // Testing Follower api_util 
  window.fetchFollowers = fetchFollowers;
  window.fetchFollower = fetchFollower; 
  window.createFollower = createFollower; 
  window.deleteFollower = deleteFollower; 

  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>Welcome to Instagram</h1>, root);
});