import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";


const configureStore =  (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    // compose(
    //   applyMiddleware(thunk, logger),
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    applyMiddleware(thunk, logger)
  )
);


export default configureStore;

