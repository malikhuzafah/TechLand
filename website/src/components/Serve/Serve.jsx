import React from "react";
import { Grid } from "@mui/material";

const Serve = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "100px 50px",
      }}
    >
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        Who we Serve
      </span>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#1d1d1d",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_investors"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Investors
          </span>
          <br />
          <span>
            We serve investors of all sizes, from individuals investing their
            savings to institutions investing their clients'​ assets.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_institutions"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Institutions
          </span>
          <br />
          <span>
            We serve institutions, including pension funds, foundations,
            endowments, official institutions, insurance companies, and other
            financial institutions, as well as financial professionals.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#1d1d1d",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_intermediaries"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Intermediaries
          </span>
          <br />
          <span>
            We serve financial professionals, including financial advisors,
            bankers, wealth advisors, insurance brokers, and other
            professionals.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_individuals"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Individuals
          </span>
          <br />
          <span>
            We serve individual investors, including people investing their
            personal money, the money they save for their children’s education
            and their retirement savings.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#1d1d1d",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_government"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Government
          </span>
          <br />
          <span>
            We serve governments, including central banks, sovereign wealth
            funds, and other government entities.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "100px 50px",
          }}
        >
          <div className="about_corporations"></div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Corporations
          </span>
          <br />
          <span>
            We serve corporations, including defined benefit and defined
            contribution pension plans, and corporate cash management programs.
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Serve;
