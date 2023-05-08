import "./App.css";
import MainLayout from "./Layout/MainLayout";


import Sidebar from "./Components/Sidebar";
import Box from "./Components/Box.js";
import Course from "./Components/Course.js";

function App() {
  return (
    <MainLayout classname="App">
      <div>
        {/* <Box /> */}
          <Course />
      </div>
    </MainLayout>
  );
}

export default App;
