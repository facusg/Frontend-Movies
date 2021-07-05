import React, { useState, useEffect } from "react";
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
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        handleShow(1);
      } else {
        handleShow(0.5);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
      /*  window.addEventListener("focus", () => {}); */
    };
  }, []);

  return (
    <div
      onClick={() => {
        handleShow(1);
      }}
    >
      <AppBar position="fixed" style={{ opacity: show }}>
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
