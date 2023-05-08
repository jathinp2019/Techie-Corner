import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Preloader from "./Components/Preloader.js";

import Sidebar from "./Components/Sidebar";
import Box from "./Components/Box.js";
import Course from "./Components/Course.js";

function App() {
  return (
    <>
    < Preloader />
    
     <MainLayout classname="App" >
      <div >
        <Box /> 
      </div>
    </MainLayout> 
    </>
  );
}

export default App;
