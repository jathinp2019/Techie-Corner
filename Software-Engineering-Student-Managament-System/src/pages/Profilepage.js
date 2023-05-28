import React from 'react';
import MainLayout from '../Layout/MainLayout';
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
  MDBListGroupItem,
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
      <section style={{ backgroundColor: 'transparent', boxShadow: '5px' }}>
        <MDBContainer
          className='py-5'
          style={{
            background: 'black',
            marginTop: '150px',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
          }}
        >
          <a href='http://localhost:3000/edit' style={{ color: 'white' }}>
            Edit Profile <AiFillEdit></AiFillEdit>
          </a>
          <div style={{ width: '100%' }}>
            <MDBRow>
              <MDBCol lg='4'>
                <MDBCard className='mb-3'>
                  <MDBCardBody className='text-center square border border-info'>
                    <MDBCardImage
                      src={userData.image}
                      alt='avatar'
                      className='rounded-circle'
                      style={{ width: '150px' }}
                      fluid
                    />

                    <p className='text-muted mb-4'>
                      ROLL NO: {userData.RollNo}
                    </p>
                    <p className='text-muted mb-4'>SEM: {userData.sem}</p>
                    <p className='text-muted mb-1'>BRANCH: {userData.branch}</p>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className='mb-4 mb-lg-0 '>
                  <MDBCardBody className='p-0 square border border-info rounded-6'>
                    <MDBListGroup flush className='rounded-3'>
                    <a href={userData.git} target='new'>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='github fa-lg'
                          style={{ color: '#333333' }}
                        />
                        <MDBCardText>
                          
                            GitHub
                          
                        </MDBCardText>
                      </MDBListGroupItem></a>
                      <a href={userData.link} target='new'>
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                          <MDBIcon
                            fab
                            icon='fa fa-linkedin'
                            style={{ color: '#3b5998' }}
                          />
                          <MDBCardText>LinkedIn</MDBCardText>
                        </MDBListGroupItem>
                      </a>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg='8'>
                <MDBCard className='mb-6'>
                  <MDBCardBody className='ps-4  border border-info rounded-6'>
                    <MDBRow>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted text-dark'>
                          Name : {userData.fname} {userData.lname}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <br />
                    <MDBRow>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted text-dark'>
                          Email : {userData.email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <br />
                    <MDBRow>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted text-dark'>
                          Phone : {userData.Phone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <br />
                    <MDBRow>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted text-dark'>
                          Address : {userData.address}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                <br />
                <MDBRow mb='4'>
                  <MDBCol md='6'>
                    <MDBCard className='mb-2 mb-md-0 '>
                      <MDBCardBody className='square border border-info rounded-6'>
                        <MDBCardText className='mb-1'>
                          <span
                            className='text-primary font-italic me-1'
                            style={{ textAlign: 'center' }}
                          >
                            Father's Details
                          </span>{' '}
                        </MDBCardText>
                        <p style={{ color: 'black' }}>
                          Father's Name : {userData.fnam}
                        </p>

                        <p style={{ color: 'black' }}>
                          Father's Contact : {userData.fnum}
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBCard className='mb-2 mb-md-0'>
                      <MDBCardBody className='square border border-info rounded-6 '>
                        <MDBCardText className='mb-1'>
                          <span className='text-primary font-italic me-1'>
                            Mother's Details
                          </span>{' '}
                        </MDBCardText>

                        <p style={{ color: 'black' }}>
                          Mother's Name : {userData.mnam}
                        </p>
                        <p style={{ color: 'black' }}>
                          Mother's Contact {userData.mnum}
                        </p>
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
