import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function BottonLogout() {
  const handleLogoutClick = () => {
    console.log("Me deslogeo");
  };
  return (
    <>
      <Link
        exact
        to="/login"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button onClick={handleLogoutClick} color="inherit" href="#">
          Logout
        </Button>
      </Link>
    </>
  );
}
