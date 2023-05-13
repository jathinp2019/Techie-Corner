import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
function MainLayout({ children }) {
  useEffect(() => {
    fetch("http://localhost:4000/userdata",{
      method: "POST",
      crossDomain: true,
      headers: {
          "content-type": "application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          token:window.localStorage.getItem("token"),
      }),
  }).then((res)=>res.json())
  .then((data) =>{
      console.log(data , "UserData")
  })
  })
  return (
    <div>
      {/* <Header/> */}
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
