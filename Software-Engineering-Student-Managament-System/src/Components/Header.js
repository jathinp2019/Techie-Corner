import './css/header.css'; // import the CSS file for styling
import imga from './images/aa.jpg';

import { BiSearch } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';
import Logo from './images/tlogo.png';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
// function Header() {
  const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div style={{ color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", height: "100%",fontSize:"30px",paddingTop:"17px" }}>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    );
  };

const Header = () => {
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
  const [data, setData] = useState('');

  const getData = async () => {
    const response = await Axios.get('http://localhost:3000/getData');
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = './';
  };

  // let name=''
  // console.log('dogsss',data[2])

  // console.log("type ",typeof name)
  // let image=data[0].image

  return (
    <header className='header'>
      <div className='left'>
        <img src={Logo} />
        {/* <span
          style={{
            color: "#fff",
            marginRight: 13,
            marginLeft: 20,
            fontSize: 25,
            textAlign: "center",
            display: "inline-block",
          }}
        >
          Techie Corner
          </span> */}
      </div>
      <div className='center'>
        
        <Timer/></div>
      <div className='right'>
        <span
          style={{
            color: '#fff',
            marginRight: 13,
            fontSize: 25,
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          <h2>{userData.fname}</h2>
          {/* {data[2]} */}
        </span>
        <div style={{ position: 'relative' }}>
          <img
            src={data[5]}
            alt='Header Image'
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 5,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                marginTop: '5px',
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                  marginTop: 0,
                  padding: 0,
                  width: 180,
                  height: '89px',
                  textAlign: 'justify',
                }}
              >
                <li>
                  <a href='http://localhost:3000/edit' style={{ color: 'black' }}>
                    Edit Profile <AiFillEdit></AiFillEdit>
                  </a>
                </li>
                <li>
                  {/* <button onClick={logOut} style={{ color: 'black' }}>
                    Logout <IoLogOut></IoLogOut>
                  </button> */}
                  <a onClick={logOut} style={{ color: 'black' }}>
                    Logout <IoLogOut></IoLogOut>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
