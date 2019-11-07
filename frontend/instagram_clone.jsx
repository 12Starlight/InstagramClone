// React Imports
import React from "react";
import ReactDOM from "react-dom";
import { login, signup, logout } from "./util/session_api_util"

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
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>Welcome to Instagram</h1>, root);
});