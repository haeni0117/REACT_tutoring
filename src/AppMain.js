import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./pages/Post";
import MyPage from "./pages/MyPage";

const AppMain = () => {
  return (
    //routing
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPage />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};
export default AppMain;
