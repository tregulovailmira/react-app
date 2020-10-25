import React, { Component, Suspense, lazy } from "react";
import "./App.css";
// import UserListContainer from "./components/UserListContainer";
// import Form from "./components/forms/SignInForm";
// import SignInFormik from "./components/forms/SignInFormik";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { divide } from "lodash";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Contacts = lazy(() => import("./pages/Contacts"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
