import React from "react";
import { Switch, Route } from "react-router-dom";

import { Public } from "routes/Public";
import { Protected } from "routes/Protected";

import Login from "pages/Login";
import Register from "pages/Register";
import PageNotFound from "pages/Error404";
import Dashboard from "pages/Dashboard";
import Courses from "pages/Courses";
import Course from "pages/Course";
import CourseVideo from "pages/CourseVideo";
import Profile from "pages/Profile";
import { Chat } from "./components/live/Chat/Chat";
import LiveName from "pages/LiveName";
export default function App() {
  return (
    <>
      <Switch>
        <Public exact path="/" component={Login} />
        <Route exact path="/workshop" component={LiveName} />
        <Route exact path="/live" component={Chat} />
        <Public exact path="/login" component={Login} />
        <Public exact path="/register" component={Register} />
        <Protected exact path="/dashboard" component={Dashboard}></Protected>
        <Protected exact path="/courses" component={Courses}></Protected>
        <Protected exact path="/profile" component={Profile}></Protected>
        <Protected
          exact
          path="/course/:name/video/:id"
          component={CourseVideo}
        ></Protected>
        <Protected exact path="/course/:name" component={Course}></Protected>
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
