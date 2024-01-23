// components/LoginPage.js

import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const Auth = ({ handleLogin, handleSignup }) => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ddd0c8",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ marginBottom: 4 }}>
            Title
          </Typography>
          {showLogin ? (
            <Login handleLogin={handleLogin} />
          ) : (
            <Signup handleSignup={handleSignup} />
          )}
          <Button onClick={toggleForm} color="primary" sx={{ marginTop: 2 }}>
            {showLogin ? "Switch to Sign Up" : "Switch to Login"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
