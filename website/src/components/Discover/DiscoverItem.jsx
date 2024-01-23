import React from "react";
import { Grid } from "@mui/material";

const DiscoverItem = ({ head, para, clName }) => {
  console.log(clName);
  return (
    <Grid item xs={12} sm={6}>
      <div>
        <div
          className={clName}
          style={{
            width: "100%",
            height: "300px",
          }}
        ></div>
        <h3>{head}</h3>
        <p>{para}</p>
        <a href="#" className="disc_button">
          Learn more
        </a>
      </div>
    </Grid>
  );
};

export default DiscoverItem;
