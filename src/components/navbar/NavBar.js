import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Bottons from "./Bottons";
import BottonLogin from "./BottonLogin";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <Link exact to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button href="/" color="inherit">
              <Typography value="h5">"Logo"</Typography>
            </Button>
          </Link>

          <Bottons />

          <BottonLogin />
        </Toolbar>
      </AppBar>
    </div>
  );
}
