import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import RegisterScreen from "../components/login/RegisterScreen";
import DashboardRoutes from "./DashboardRoutes";
import { UserContext } from "../UserContext";

export default function AppRouter() {
  const { user, setUser } = useContext(UserContext);

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
          <Route
            exact
            path="/register"
            component={() => <RegisterScreen updateUser={updateUser} />}
          />

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
