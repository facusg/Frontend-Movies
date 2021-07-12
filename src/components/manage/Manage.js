import React from "react";
import { Box, Container, Grid } from "@material-ui/core";

import SettingPassword from "./SettingPassword";
import SettingAccount from "./SettingAccount";

export default function Manage({ user, updateUser }) {
  return (
    <div style={{ marginTop: 100 }}>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={5} md={6} xs={12}>
              <SettingAccount user={user} updateUser={updateUser} />
            </Grid>
            <Grid item lg={7} md={6} xs={12}>
              <SettingPassword user={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
