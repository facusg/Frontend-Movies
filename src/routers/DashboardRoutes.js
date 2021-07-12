import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import MoviesScreen from "../components/movies/MoviesScreen";
import SeriesScreen from "../components/series/SeriesScreen";
import FavoritesScreen from "../components/favorites/FavoritesScreen";
import Browse from "../components/browse/Browse";
import SearchScreen from "../components/browse/SearchScreen";
import Manage from "../components/manage/Manage";

export default function DashboardRoutes(props) {
  const user = props.user;
  const updateUser = props.updateUser;

  return (
    <>
      <NavBar user={user} updateUser={updateUser} />
      <div>
        <Switch>
          <Route exact path="/" component={Browse} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/series" component={SeriesScreen} />
          <Route exact path="/movies" component={MoviesScreen} />
          <Route exact path="/favorites" component={FavoritesScreen} />
          <Route
            exact
            path="/manage"
            component={() => <Manage user={user} updateUser={updateUser} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}
