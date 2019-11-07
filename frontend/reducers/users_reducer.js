import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";
import { RECEIVE_USER } from "../actions/user_actions";


const usersReducer = (oldState = {}, action) => { // oldState is refrencing the Redux state
  Object.freeze(oldState);

  switch(action.type) { // We want to make sure, whatever is in our actions is put into our reducers too, so our next state can reflect that
    case RECEIVE_POSTS:
      return Object.assign({}, oldState, action.users)
    case RECEIVE_USER: 
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  }
}


export default usersReducer;