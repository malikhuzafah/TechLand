import React from "react";

const AboutBtn = ({ title, active, handleOur, index }) => {
  return (
    <button
      className={active ? "about_btn active" : "about_btn"}
      onClick={() => {
        handleOur(index);
      }}
    >
      {title}
    </button>
  );
};

export default AboutBtn;
