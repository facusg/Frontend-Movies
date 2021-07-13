import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core";

export default function SettingPassword({ user, updateUser }) {
  const [values, setValues] = useState({
    password: "",
    newpassword: "",
    confirm: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  async function handleChangePassword() {
    if (values.password === "" || values.newpassword === "") {
      setMessage("Todos lo campos deben estar llenos");
    } else if (values.newpassword === values.confirm) {
      const url = `http://localhost:8000/users/password/${user.id}`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } else {
      setMessage("Las contraseñas deben coincidir");
    }
  }
  return (
    <form>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New Password"
            margin="normal"
            name="newpassword"
            onChange={handleChange}
            type="password"
            value={values.newpassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <p>{message}</p>
        </CardContent>
        <Divider />
        <Box
          style={{ margin: 15, display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleChangePassword}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
}
