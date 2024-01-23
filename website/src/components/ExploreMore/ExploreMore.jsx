import React from "react";
import { Divider } from "@mui/material";
import "./ExploreMore.css";

const ExploreMore = () => {
  const about = [
    "About Final Wealth",
    "Principles",
    "Leadership",
    "History",
    "Global Impact",
    "Contacts and Locations",
    "Doing Business with Final Wealth",
  ];

  const newsroom = ["Overview", "Media Contacts"];

  const insights = [
    "Final Wealth Investment Institute",
    "Investment Stewardship",
    "Our approach to sustainability",
    "Public Policy",
    "Long-term capitalism",
    "Investor Perspectives",
  ];

  const investorRelations = [
    "Overview",
    "Annual Reports & Proxy Information",
    "SEC Filings",
    "Stock Information",
    "Dividend History",
    "Events & Presentations",
    "Corporate Governance",
  ];

  const corporateSustainability = [
    "Corporate Sustainability",
    "Human capital",
    "Environmental Sustainability",
    "Ethics & Integrity",
    "Health & Safety",
    "Social Impact",
  ];

  const careers = [
    "Search Jobs",
    "Life at Final Wealth",
    "Rewards & Benefits",
    "Inclusion & Diversity",
    "Learning & Development",
    "Students",
    "Our Teams",
    "Supporting Veterans",
    "Final Wealth Alumni Network",
  ];

  return (
    <div
      className="explore-more"
      style={{
        backgroundColor: "#eee2dc",
        padding: "50px 5px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "0",
          padding: "50px 0",
          fontSize: "50px",
          fontWeight: "700",
          color: "#000",
        }}
      >
        Explore More
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h3>About Us</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {about.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Newsroom</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {newsroom.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Insights</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {insights.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Investor Relations</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {investorRelations.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Corporate Sustainability</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {corporateSustainability.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Careers</h3>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {careers.map((item) => (
              <li>
                <a href="" className="link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
