import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Members from "./pages/Members/Members";

const ZouRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard"> <Dashboard /> </Route>
        <Route path="/members"> <Members /> </Route>
      </Switch>
    </Router>
  );
};

export default ZouRouter
