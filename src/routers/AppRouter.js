import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import RegisterScreen from "../components/login/RegisterScreen";
import Manage from "../components/manage/Manage";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRouter() {
  const [user, setUser] = useState(null);
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(CheckUser, []);

  function CheckUser() {
    fetch("http://localhost:8000/auth/check", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
        console.log(data);
        console.log(data.data.user);
        console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
        updateUser(data.data.user);
      });
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <LoginScreen updateUser={updateUser} />}
          />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/manage" component={Manage} />
          <Route
            path="/"
            component={() => (
              <DashboardRoutes user={user} updateUser={updateUser} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

/* <Route
  path='/dashboard'
  render={(props) => (
    <Dashboard {...props} isAuthed={true} />
  )}
/> */
