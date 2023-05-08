import './css/box.css';
import CircularProgressBar from './circularProgressbar';
import { FaRupeeSign } from 'react-icons/fa';
import MainLayout from '../Layout/MainLayout';
import Axios from "axios";
import React , { useState, useEffect } from "react"


const Box = (props) => {
  // const [data,setData]=useState("");
  
  //   const getData=async() => {
  //     const r1   = await Axios.get("http://localhost:3000/getData");
  //     setData(r1.data);
  //   }
  //   useEffect(() => {
  //     getData()
  //   },[]);
  
  //   console.log("aaaass ",data[1])
    let Subject=['Cloud', 'SE', 'PPL', 'DS']
let Event=['Lab','Sprint 1','Assignment','Case Study']
let Deadline=['25 April','27 April','29 April','2 May']
    // console.log(data)
  return (
    <MainLayout>X
    <div class='box1'>
      <div class='box2' style={{ backgroundColor: '#fff' }}>
        <span>
          <h1 style={{ color: '#000', textAlign: 'center' }}>Payments</h1>
          <h1 style={{ fontSize: 50 }}>
            <FaRupeeSign
              style={{ fontSize: 40, color: 'black', fontWeight: 700 }}
            ></FaRupeeSign>
            <span style={{ fontSize: 40, color: 'black', fontWeight: 700 }}>
              300
            </span>
          </h1>
          <p style={{ fontSize: 25 }}>wallet balance</p>
          <p style={{ fontSize: 25 }}>
            <FaRupeeSign
              style={{ fontSize: 40, color: 'black', fontWeight: 700 }}
            ></FaRupeeSign>
            <span>
              {' '}
              <span style={{ fontSize: 40, color: 'black', fontWeight: 700 }}>
                300{' '}
              </span>{' '}
              Previous Month Expenditure
            </span>{' '}
          </p>
          <p style={{ fontSize: 25 }}>
            <FaRupeeSign
              style={{ fontSize: 40, color: 'black', fontWeight: 700 }}
            ></FaRupeeSign>
            <span>
              {' '}
              <span style={{ fontSize: 40, color: 'black', fontWeight: 700 }}>
                300{' '}
              </span>{' '}
              Most Recent Transaction
            </span>{' '}
          </p>
        </span>
      </div>

      <div class='box3' style={{ backgroundColor: '#ED6275' }}>
        <span>
          <h1 style={{ textAlign: 'right', marginRight: 14 }}>Attendance</h1>
          {/* {data} */}
          <CircularProgressBar></CircularProgressBar>
          <br></br>
          <p style={{ marginTop: -27 }}>
            <span style={{ fontWeight: '500', marginTop: -10 }}>129</span>{' '}
            Classes Attended<br></br>
            <span style={{ fontWeight: '500' }}>168</span> Classes Conducted
          </p>
        </span>
      </div>
      
      <div class='gral' style={{ backgroundColor: '#00d285' }}>
      <iframe className='frame' src="https://charts.mongodb.com/charts-software-engineering-proj-czwdi/embed/charts?id=6444b048-81d6-4d8b-8df4-427b6851a73c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      
      </div>
      <div class='lb' style={{ backgroundColor: '#cc89fc' }}>
        <span>
          <h1 style={{ textAlign: 'center' }}>Announcements</h1>
          <div className='tab'>
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
