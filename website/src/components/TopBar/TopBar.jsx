import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        //   width: "100%",
        height: "32px",
        fontSize: "12px",
        backgroundColor: "#efefef",
        padding: "0 100px",
      }}
    >
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <li>BlackRock</li>
          <li>iShares</li>
          <li>Aladdin</li>
          <li>Our company</li>
        </ul>
      </div>
      <div>
        <span>Local Websites</span>
      </div>
    </div>
  );
};

export default TopBar;
