import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import Search from "./Search";
import BottonLogout from "./BottonLogout";

export default function Bottons() {
  return (
    <>
      <NavLink
        exact
        to="/series"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button color="inherit">Series</Button>
      </NavLink>
      <NavLink
        exact
        to="/movies"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button color="inherit">Movies</Button>
      </NavLink>
      <NavLink
        exact
        to="/favorites"
        style={{ textDecoration: "none", color: "white" }}
        activeClassName="active"
      >
        <Button color="inherit">Mi List</Button>
      </NavLink>
      <div style={{ flexGrow: 1 }}></div>
      <Search />
      <BottonLogout />
    </>
  );
}
