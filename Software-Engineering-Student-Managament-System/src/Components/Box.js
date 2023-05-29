import './css/box.css';
import CircularProgressBar from './circularProgressbar';
import { FaRupeeSign } from 'react-icons/fa';
import MainLayout from '../Layout/MainLayout';
import Axios from "axios";
import React, { useState, useEffect } from "react"
import Backgroundvideo from "./images/Backgroundvideo.mp4"


const Box = (props) => {
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
  const [annData, setAnnData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/anndata', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'AnnData');
        setAnnData(data.data);
      });
  }, []);
  const totalattendance = userData.att_c1 + userData.att_c2 + userData.att_c3
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
  // console.log(data)

  return (
    <MainLayout >

      <div className='box1' style={{ background: "transparent" }}>

        <div className='box2' style={{ backgroundColor: 'transparent', boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", color: 'black' }}>
          <span>
            <h1 style={{ color: '#011409', textAlign: 'center',marginLeft:"145px" }}>Scores</h1>
            <h1 style={{ fontSize: 50 }}>

              {/* <span style={{ fontSize: 40, color: 'black', fontWeight: 700 }}> */}
             
              <p></p>
              <p></p>
              <p />
              <table className="score" style={{color:"black"}}>
              <tr >
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>19CSE303</h1> </td> 
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>{userData.marks_19CSE303}</h1></td>  
               </tr>

               <tr>
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>19CSE304</h1> </td> 
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>{userData.marks_19CSE304}</h1></td>  
               </tr>

               <tr>
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>19CSE305</h1> </td> 
               <td className='score' style={{padding:"10px"}}><h1 style={{color:"black"}}>{userData.marks_19CSE305}</h1></td>  
               </tr>
               
              {/* <span><h1>19CSE304 : {userData.marks_19CSE304}</h1> </span>
              <span><h1>19CSE305 : {userData.marks_19CSE305}</h1> </span> */}
              </table>  
              

              {/* </span> */}
            </h1>
          </span>
        </div>

        <div className='box3' style={{ backgroundColor: '#transparent', boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", color: 'black' }}>
          <span>
            <h1 style={{ textAlign: 'right', marginLeft: "130px", color: '#011409' }}>Attendance</h1>
            {/* {data} */}
            <CircularProgressBar></CircularProgressBar>
            <br></br>
            <p style={{ marginTop: -27 }}>
              <span style={{ fontWeight: '500', marginTop: -10}}> {totalattendance}</span>
              <span>classes Attended</span><br></br>
              <span style={{ fontWeight: '500' }}>300</span>  classes Conducted
            </p>
          </span>
        </div>

        <div  className='gral' style={{ backgroundColor: '#transparent',boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",color:'black' }}>
        <iframe className="frame" src={userData.graph}></iframe>


        </div>
        <div className='lb' style={{ backgroundColor: '#transparent', boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", color: 'black' }}>
          <span>
            <h1 style={{ textAlign: 'center', color: '#011409' }}>Announcements</h1>
            <div className='tab'>

                {annData.map((annData) => (
                  <table key={annData._id} style={{color:"black"}}>
                    <tr>
                      <td>{annData.subject}</td>
                      <td>{annData.type}</td>
                      <td>{annData.date.slice(0,10) }</td>
                      </tr>
                  </table>
                ))}
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Box;
