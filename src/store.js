import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};
const middleware = [thunk];


//https://github.com/zalmoxisus/redux-devtools-extension/issues/220
//https://github.com/reduxjs/redux/issues/2033
var getComposeEnhancers = () => {
    if (window.navigator.userAgent.includes('Chrome')) {
      return compose(
        applyMiddleware(...middleware)
        ,window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
    return compose(applyMiddleware(...middleware) );
  };


const store = createStore(
  rootReducer,
  initialState,
  getComposeEnhancers()
);
export default store;
