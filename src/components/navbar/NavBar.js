import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import Bottons from "./Bottons";
import BottonLogin from "./BottonLogin";

export default function NavBar({ user, updateUser }) {
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
          <Link exact to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">
              <Typography value="h5">Reapp Movies</Typography>
            </Button>
          </Link>
          {user ? (
            <Bottons user={user} updateUser={updateUser} />
          ) : (
            <BottonLogin />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
