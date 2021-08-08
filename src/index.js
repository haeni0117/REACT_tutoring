import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Post from "./pages/Post.js";
import Exercise from "./Exercise.js";
import reportWebVitals from "./reportWebVitals";
import AppMain from "./AppMain.js";
//import App from ".App.js";

ReactDOM.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
