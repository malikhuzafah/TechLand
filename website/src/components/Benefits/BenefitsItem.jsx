import React from "react";
import { Grid } from "@mui/material";

const BenefitsItem = ({ head, para }) => {
  return (
    <Grid item xs={12} sm={6}>
      <div
        style={{
          textAlign: "center",
          padding: "0 50px",
        }}
      >
        <h2>{head}</h2>
        <p>{para}</p>
      </div>
    </Grid>
  );
};

export default BenefitsItem;
