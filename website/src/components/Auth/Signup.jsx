import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Signup
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
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          sx={{ marginBottom: 2 }}
          value={name}
          onChange={handleNameChange}
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
            handleSignup(email, name, password);
          }}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default Signup;
