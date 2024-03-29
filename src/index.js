import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import balanceReducer from "./store/balanceReducer";
import loanReducer from "./store/loanReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    balanceReducer,
    loanReducer,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
