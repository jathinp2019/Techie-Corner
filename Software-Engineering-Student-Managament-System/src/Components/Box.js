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
  let Subject = ['Cloud', 'SE', 'PPL', 'DS']
  let Event = ['Lab', 'Sprint 1', 'Assignment', 'Case Study']
  let Deadline = ['25 April', '27 April', '29 April', '2 May']
  const totalattendance = userData.att_c1 + userData.att_c2 + userData.att_c3
  
  // console.log(data)
  return (
    <MainLayout >
      
      <div  className='box1' style={{ background: "transparent"}}>
        
        <div  className='box2' style={{ backgroundColor: 'transparent',boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" ,color:'white'}}>
          <span>
            <h1 style={{ color: '#011409', textAlign: 'center' }}>Scores</h1>
            <h1 style={{ fontSize: 50 }}>

              {/* <span style={{ fontSize: 40, color: 'white', fontWeight: 700 }}> */}
                <span><h1>Semester - 5 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userData.sem5}</h1> </span>
                <span><h1>Sem-4 : {userData.sem4}</h1> </span>
                <span><h1>Sem-3 : {userData.sem3}</h1> </span>
                <span><h1>Sem-2 : {userData.sem2}</h1> </span>
                <span><h1>Sem-1 : {userData.sem1}</h1> </span>

              {/* </span> */}
            </h1>
          </span>
        </div>

        <div  className='box3' style={{ backgroundColor: '#transparent',boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",color:'white' }}>
          <span>
            <h1 style={{ textAlign: 'right', marginRight: 14,color:'#011409' }}>Attendance</h1>
            {/* {data} */}
            <CircularProgressBar></CircularProgressBar>
            <br></br>
            <p style={{ marginTop: -27 }}>
              <span style={{ fontWeight: '500', marginTop: -10 }}>{totalattendance}</span>{' '}
               classes Attended<br></br>
              <span style={{ fontWeight: '500' }}>300</span>  classes Conducted
            </p>
          </span>
        </div>

        <div  className='gral' style={{ backgroundColor: '#transparent',boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",color:'white' }}>
        <iframe className="frame" src="https://charts.mongodb.com/charts-software-engineering-proj-czwdi/embed/charts?id=6444b048-81d6-4d8b-8df4-427b6851a73c&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>


        </div>
        <div  className='lb' style={{ backgroundColor: '#transparent' ,boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",color:'white'}}>
          <span>
            <h1 style={{ textAlign: 'center',color:'#011409' }}>Announcements</h1>
            <div  className='tab'>
              <table>
                <tr>
                  <td>{Subject[0]} </td>
                  <td>{Event[0]}</td>
                  <td>{Deadline[0]}</td>
                </tr>
                <tr>
                  <td>{Subject[1]}</td>
                  <td>{Event[1]}</td>
                  <td>{Deadline[1]}</td>
                </tr>
                <tr>
                  <td>{Subject[2]}</td>
                  <td>{Event[2]}</td>
                  <td>{Deadline[2]}</td>
                </tr>
                <tr>
                  <td>{Subject[3]}</td>
                  <td>{Event[3]}</td>
                  <td>{Deadline[3]}</td>
                </tr>
                <tr>
                  <td>Centro comercial</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
              </table>
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Box;
