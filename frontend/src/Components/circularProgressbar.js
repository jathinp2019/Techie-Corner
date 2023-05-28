import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/userdata', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'UserData');
        setUserData(data.data);
      });
  }, []);
  const totalattendance = userData.att_c1 + userData.att_c2 + userData.att_c3
  const percent = totalattendance/3
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
          value={percent}
          text={`${percent.toFixed(2)}%`}
        />
      </div>
    </div>
  );
}
export default CircularProgressBar;
