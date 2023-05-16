import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
function MainLayout({ children }) {
  return (
    <div>
      {/* <Header/> */}
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
