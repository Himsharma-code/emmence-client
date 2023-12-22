import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import Form from "./Form"; // Assuming Form and UserList are separate components
import UserList from "./UserList"; // Replace these with the actual components
import Logo from "../../assets/icons/Logo";

const App = () => {
  return (
    <>
      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "150px" }}>
        <Logo />
        {/* Add header content here */}
      </Paper>
      <Container style={{ padding: 0 }}>
        <Grid container sx={{ height: "calc(100vh - 86px)" }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ maxHeight: "500px", overflow: "auto" }}>
              <Form />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0}>
              <UserList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
