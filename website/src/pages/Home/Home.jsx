import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";
import ExploreMore from "../../components/ExploreMore/ExploreMore";
import Discover from "../../components/Discover/Discover";
import Benefits from "../../components/Benefits/Benefits";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <div className="home_main">
        <div
          style={{
            // width: "50%",
            // margin: "0 auto",
            padding: "100px 0",
            color: "#ffffff",
          }}
        >
          <h1>We're here for you</h1>
          <p>
            The money we manage is not our own. It belongs to many people – in
            many different <br /> locations – all trying to achieve their most
            important financial goals. We’re represented by 70 <br /> offices in
            30 different locations, with local expertise strengthened by global
            service.
          </p>
        </div>
      </div>

      <Benefits />

      <Discover />

      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundColor: "#DDD0C8",
          }}
        >
          <div
            style={{
              padding: "100px 50px",
            }}
          >
            <h2>Don’t see your location?</h2>
            <p
              style={{
                marginBottom: "40px",
              }}
            >
              Check out our global website. That could be a good place to start.
            </p>
            <a href="#" className="btn">
              Visit global site
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundColor: "#323232",
            color: "#DDD0C8",
          }}
        >
          <div
            style={{
              padding: "100px 50px",
            }}
          >
            <h2>Where we stand and where we’re going</h2>
            <div>
              <ul>
                <li>Our commitment to sustainability</li>
                <li>Investment stewardship annual report</li>
                <li>Our ESG integration approach</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>

      <ExploreMore />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
