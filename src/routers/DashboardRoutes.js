import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import NavBar from "../components/navbar/NavBar";
import MoviesScreen from "../components/movies/MoviesScreen";
import SeriesScreen from "../components/series/SeriesScreen";
import FavoritesScreen from "../components/favorites/FavoritesScreen";
import Browse from "../components/browse/Browse";

export default function DashboardRoutes() {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Browse} />
          <Route exact path="/series" component={SeriesScreen} />
          <Route exact path="/movies" component={MoviesScreen} />
          <Route exact path="/favorites" component={FavoritesScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}
