import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
export default function BottonLogin() {
  const handleLoginClick = () => {
    console.log("Mostrar Login");
  };
  const handleRegisterClick = () => {
    console.log("Mostrar Register");
  };

  return (
    <>
      <div style={{ flexGrow: 1 }}></div>
      <NavLink
        exact
        to="/login"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button onClick={handleLoginClick} color="inherit" href="#">
          Login
        </Button>
      </NavLink>

      <NavLink
        exact
        to="/register"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button onClick={handleRegisterClick} color="inherit" href="#">
          Register
        </Button>
      </NavLink>
    </>
  );
}
