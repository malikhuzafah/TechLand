// components/InvestorInformation.js

import React from "react";
import { Container, Typography, List, ListItem } from "@mui/material";

const InvestorInformation = () => {
  return (
    <Container
      id="investor-info"
      sx={{
        padding: 4,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        marginTop: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Investor Information
      </Typography>
      <Typography paragraph>
        Welcome to Investor Firm, where your investments grow!
      </Typography>
      <Typography paragraph>Key Information:</Typography>
      <List sx={{ marginBottom: 2 }}>
        <ListItem>Founded: 2005</ListItem>
        <ListItem>Total Assets Under Management: $10 billion</ListItem>
        <ListItem>
          Investment Strategies: Equity, Fixed Income, Real Estate
        </ListItem>
      </List>
    </Container>
  );
};

export default InvestorInformation;
