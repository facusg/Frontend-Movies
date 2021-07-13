import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function SettingAccount({ user, updateUser }) {
  const history = useHistory();
  const [deleteConf, setDelete] = useState(false);
  const [message, setMessage] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  const [values, setValues] = useState({
    firstName: user.name,
    lastName: user.lastname,
    email: user.email,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  function handelDeletePassword(event) {
    setDeletePassword(event.target.value);
  }

  async function handleChangeAccount() {
    if (!(values.firstName, values.lastName, values.email == "")) {
      const url = `http://localhost:8000/users/account/${user.id}`;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 200) {
        updateUser(data.user);
        alert(data.message);
        history.replace("/manage");
      } else {
        setMessage(data.message);
      }
    } else {
      setMessage("Todos los campos deben estar completos");
    }
  }

  async function handleDeleteAccount() {
    const url = `http://localhost:8000/users/${user.id}`;
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify({ deletePassword }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (response.status === 200) {
      alert(data.message);
      updateUser(data.user);
      history.replace("/");
    }
  }

  return (
    <form autoComplete="off">
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <p>{message}</p>
        <Divider />
        {deleteConf ? (
          <></>
        ) : (
          <>
            <Box
              style={{
                margin: 15,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={handleChangeAccount}
              >
                Save details
              </Button>
            </Box>
            <Divider />
            <Box
              style={{
                margin: 15,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  setDelete(true);
                }}
              >
                Delete account
              </Button>
            </Box>
          </>
        )}
        {deleteConf ? (
          <>
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                label="Confirm password"
                margin="normal"
                name="delete"
                onChange={handelDeletePassword}
                type="password"
                value={deletePassword}
                variant="outlined"
              />
              <p>{message}</p>
            </CardContent>

            <Box
              style={{
                margin: 15,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                style={{ marginRight: 10 }}
                color="secondary"
                variant="contained"
                onClick={handleDeleteAccount}
              >
                CONFIRM DELETE
              </Button>
              <Button
                style={{ marginRight: 15 }}
                color="primary"
                variant="contained"
                onClick={() => {
                  setDelete(false);
                }}
              >
                CANCEL
              </Button>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Card>
    </form>
  );
}
