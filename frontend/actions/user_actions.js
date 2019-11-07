import * as UserApiUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";


// regular actions
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})


// Thunk Actions
export const fetchUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id).then( response => dispatch(receiveUser(response)))
);