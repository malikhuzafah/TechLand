import React from "react";
import { Grid } from "@mui/material";
import BenefitsItem from "./BenefitsItem";

const Benefits = () => {
  return (
    <Grid
      style={{
        padding: "50px 0",
        backgroundColor: "#eee2dc",
      }}
      container
      spacing={2}
    >
      <BenefitsItem
        head={"Aligned interests"}
        para={
          "Because our investors are our owners, our interests are uniquelyaligned, allowing us to focus on you and your goals."
        }
      />
      <BenefitsItem
        head={"Greater conviction"}
        para={
          "Because our investors are our owners, we act with conviction on the investment themes that are important to you."
        }
      />
      <BenefitsItem
        head={"Long-term perspective"}
        para={
          "Because our investors are our owners, we can focus on the long term rather than quarterly results."
        }
      />
      <BenefitsItem
        head={"Low costs"}
        para={
          "Because our investors are our owners, it enables us to consistently pass along economies of scale and lower the cost of investing, so you keep more of your returns."
        }
      />
    </Grid>
  );
};

export default Benefits;
