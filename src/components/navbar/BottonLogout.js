import React from "react";
import Button from "@material-ui/core/Button";

export default function BottonLogout(props) {
  const handleLogout = async () => {
    const url = "http://localhost:8000/auth";
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
    if (response.status === 200) {
      alert(data.message);
      props.updateUser(null);
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <Button onClick={handleLogout} color="inherit">
        Logout
      </Button>
    </>
  );
}
