import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function BottonLogout(props) {
  const history = useHistory();

  const handleLogout = async () => {
    const url = "http://localhost:8000/auth";
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
    if (response.status === 200) {
      history.replace("/");
      props.updateUser(null);
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <Button onClick={handleLogout} color="inherit">
        <ExitToAppIcon />
      </Button>
    </>
  );
}
