import "./App.css";
import { useEffect,useState } from "react";
import MainLayout from "./Layout/MainLayout";

import Sidebar from "./Components/Sidebar";
import Box from "./Components/Box.js";
import Course from "./Components/Course.js";
import Loading from './Components/Loading.js';
import ProfilePage from "./pages/Profilepage";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    
      


    <div>
      {isLoading ? (
        <Loading />
      ) : (
        // Render your main content here
        <>
        <h1>Welcome to My App</h1>
        <MainLayout classname="App" > 
       <div >
        <Box /> 
      </div> 
     </MainLayout>  
     </>

      )}
    </div>
    </>
  );
};

export default App;
