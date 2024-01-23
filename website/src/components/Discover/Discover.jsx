import React from "react";
import { Grid } from "@mui/material";
import DiscoverItem from "./DiscoverItem";
import "./Discover.css";

const Discover = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#1d1d1d",
        color: "#F8F8F9",
      }}
    >
      <h1>Discover</h1>
      <p>
        Our clients always come first. We serve them through a global network
        powered by partnership, integrity, and a shared purpose of advancing
        sustainable economic growth and financial opportunity.
      </p>
      <Grid
        style={{
          padding: "100px 0",
        }}
        container
        spacing={2}
      >
        <DiscoverItem
          head={"Coorporations and Institutions"}
          para={
            "We serve a broad range of companies, organizations, and institutions through our financing, investing, execution and advisory capabilities."
          }
          clName={"home_org"}
        />

        <DiscoverItem
          head={"Individuals"}
          para={
            "We provide insights, guidance, and services to help you achieve your financial and investing goals."
          }
          clName={"home_ind"}
        />
      </Grid>
    </div>
  );
};

export default Discover;
