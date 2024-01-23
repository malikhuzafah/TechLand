import React from "react";
import { Grid } from "@mui/material";

const Reach = () => {
  return (
    <Grid container style={{ backgroundColor: "#1d1d1d", color: "#ffffff" }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{
          padding: "100px 50px",
        }}
      >
        <div className="about_people"></div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          19000+ People
        </span>
        <br />
        <span>of different backgrounds, races, and nationalities</span>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{
          padding: "100px 50px",
        }}
      >
        <div className="about_lang"></div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          135 languages
        </span>
        <br />
        <span>addressing the needs of a multilingual client base</span>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{
          padding: "100px 50px",
        }}
      >
        <div className="about_cont"></div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          36 countries
        </span>
        <br />
        <span>enabling us to help more and more people</span>
      </Grid>
    </Grid>
  );
};

export default Reach;
