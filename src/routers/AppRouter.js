import React, { useState } from "react";
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
