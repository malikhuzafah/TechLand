import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import ExploreMore from "../../components/ExploreMore/ExploreMore";
import Footer from "../../components/Footer/Footer";

const Careers = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          height: "500px",
          backgroundColor: "#eee2dc",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Join our team
        </span>
        <span>We're always looking for talented people to join our team</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 20px",
        }}
      >
        <span
          style={{
            marginBottom: "50px",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Current Openings
        </span>
        <div>
          <Accordion
            style={{
              backgroundColor: "#eee2dc",
              color: "#000",
              padding: "0 5%",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 20px",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Did not find what you were looking for?
        </span>
        <br />
        <span>
          Send us your resume at{" "}
          <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
        </span>
        <button
          className="btn"
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#eee2dc",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Send Cv
        </button>
      </div>

      <ExploreMore />
      <Footer />
    </div>
  );
};

export default Careers;
