import React, { useState } from "react";
import "./About.css";
import ExploreMore from "../../components/ExploreMore/ExploreMore";
import Footer from "../../components/Footer/Footer";
import AboutBtn from "../../components/AboutBtn/AboutBtn";
import { Grid } from "@mui/material";
import Ours from "../../components/Ours/Ours";
import Reach from "../../components/Reach/Reach";
import Serve from "../../components/Serve/Serve";

const About = () => {
  const [our, setOur] = useState(0);

  const about = [
    {
      title: "Our Mission",
      description:
        "We are one of the world's leading providers of investment management. We help institutions, intermediaries and individuals around the world invest money to meet their goals, fulfil their ambitions, and prepare for the future.",
    },
    {
      title: "Our Vision",
      description:
        "We are one of the world's leading providers of investment management. We help institutions, intermediaries and individuals around the world invest money to meet their goals, fulfil their ambitions, and prepare for the future.",
    },
    {
      title: "Our Goal",
      description:
        "We are one of the world's leading providers of investment management. We help institutions, intermediaries and individuals around the world invest money to meet their goals, fulfil their ambitions, and prepare for the future.",
    },
  ];

  const handleOur = (index) => {
    setOur(index);
  };

  return (
    <div
      style={{
        backgroundColor: "#eee2dc",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          padding: "20px",
        }}
      >
        <span
          style={{
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          About Us
        </span>
        <span>We are one of the world's leading providers of investment</span>
      </div>
      <Ours handleOur={handleOur} our={our} about={about} />
      <Reach />
      <div className="about_history">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Our History
            </span>
            <span
              style={{
                fontSize: "20px",
                marginTop: "30px",
                marginBottom: "30px",
                display: "block",
              }}
            >
              We are one of the world's leading providers of investment
              management. We help institutions, intermediaries and individuals
              around the world invest money to meet their goals, fulfil their
              ambitions, and prepare for the future.
            </span>
            <button className="about_btn">Read More</button>
          </div>
        </div>
      </div>
      <Serve />
      <ExploreMore />
      <Footer />
    </div>
  );
};

export default About;
