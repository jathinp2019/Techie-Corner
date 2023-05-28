import React from 'react';
import MainLayout from '../Layout/MainLayout'
import { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
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

  return (
    
    <MainLayout>
        
    <section style={{ backgroundColor: 'transparent',boxShadow:"5px"}}>
      <MDBContainer className="py-5" style={{background:"black",marginTop:"150px",boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
      <a href='http://localhost:3000/edit' style={{ color: 'white' }}>
                    Edit Profile <AiFillEdit ></AiFillEdit>
                  </a>
    <div style={{width:"100%"}}>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" >
              <MDBCardBody className="text-center square border border-info" >
                <MDBCardImage
                  src={userData.image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width:'150px'}}
                  fluid />
                 
                <p className="text-muted mb-4">ROLL NO: {userData.RollNo}</p>
                <p className="text-muted mb-4">SEM: {userData.sem}</p>
                <p className="text-muted mb-1">BRANCH: {userData.branch}</p>
               
                
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0 ">
              <MDBCardBody className="p-0 square border border-info rounded-6">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://profile.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>{userData.git}</MDBCardText>
                  </MDBListGroupItem>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="fa fa-linkedin" style={{ color: '#3b5998' }} />
                    <MDBCardText>{userData.git}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-6 ">
              <MDBCardBody className='square border border-info rounded-6'>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.fname} {userData.lname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <br></br>   
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.Phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
    
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0 " >
                  <MDBCardBody className='square border border-info rounded-6'>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1" style={{textAlign:"center"}}>Parent Details</span> </MDBCardText>
                    <p style={{color:"black"}}>{userData.fnam}</p>
                    
                    <p style={{color:"black"}}>{userData.fnum}</p>
                    <p style={{color:"black"}}>{userData.mnam}</p>
                    <p style={{color:"black"}}>{userData.mnum}</p>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody className='square border border-info rounded-6 '>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Skills</span> </MDBCardText>
                    
                    <li style={{color:"black"}}>FrontEnd</li>
                    <li style={{color:"black"}}>BackEnd</li>
                    <li style={{color:"black"}}>Python</li>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        </div>
        
      </MDBContainer>
     
    </section>
    </MainLayout>
  );
}