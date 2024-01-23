import React from "react";
import AboutBtn from "../AboutBtn/AboutBtn";

const Ours = ({ our, handleOur, about }) => {
  return (
    <div className="about_ours">
      <div>
        <AboutBtn
          title="Our Mission"
          active={our === 0}
          handleOur={handleOur}
          index={0}
        />
        <AboutBtn
          title="Our Vision"
          active={our === 1}
          handleOur={handleOur}
          index={1}
        />
        <AboutBtn
          title="Our Goal"
          active={our === 2}
          handleOur={handleOur}
          index={2}
        />
      </div>
      <div>
        <span
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            display: "block",
            marginTop: "50px",
          }}
        >
          {about[our].title}
        </span>
        <span
          style={{
            fontSize: "20px",
            marginTop: "30px",
            marginBottom: "30px",
            display: "block",
          }}
        >
          {about[our].description}
        </span>
        <button className="about_btn">Read More</button>
      </div>
    </div>
  );
};

export default Ours;
