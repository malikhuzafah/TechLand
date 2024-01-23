import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="emial"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ marginBottom: 2 }}
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{ marginBottom: 4 }}
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#323232",
          }}
          onClick={() => {
            handleLogin(email, password);
          }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default Login;
