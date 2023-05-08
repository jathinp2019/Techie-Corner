import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar() {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: 150,
          paddingLeft: 30,
          textcolor: "#000",
          MarginTop: 10,
          paddingTop: 20,
        }}
      >
        <CircularProgressbar
          styles={buildStyles({
            textColor: "black",
            pathColor: "black",
            trailColor: "white",
            display: "inline-block",
          })}
          value={77}
          text={`${77}%`}
        />
      </div>
    </div>
  );
}
export default CircularProgressBar;
