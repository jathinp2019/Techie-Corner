import { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import './css/edit.css';
import React, { useEffect } from 'react';

function Edit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, address, dob }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert('Data saved succesfully');
      setEmail('');
      setName('');
      setAddress('');
      setDob('');
    }
  };
  return (
    <>
      
      <MainLayout>
        <div class='formbold-form-wrapper'>
          <form action=''>
            <div class='formbold-input-flex'>
              <div>
                <input
                  type='text'
                  placeholder='Jane'
                  class='formbold-form-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label class='formbold-form-label'> Name </label>
              </div>
              <div>
                <input
                  type='date'
                  placeholder='Cooper'
                  class='formbold-form-input'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <label class='formbold-form-label'> Dob </label>
              </div>
            </div>

            <div class='formbold-input-flex'>
              <div>
                <input
                  type='email'
                  placeholder='jhon@mail.com'
                  class='formbold-form-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label class='formbold-form-label'> Mail </label>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='(319) 555-0115'
                  class='formbold-form-input'
                />
                <label class='formbold-form-label'> Phone </label>
              </div>
            </div>

            <div class='formbold-textarea'>
              <textarea
                rows='6'
                placeholder='enter your address'
                class='formbold-form-input'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <label class='formbold-form-label'> Address </label>
            </div>

            {/* <div class='formbold-input-file'>
              <label class='formbold-input-label'>
                Upload Photo
                <input type='file' name='upload' id='upload'></input>
              </label>
            </div> */}
            <button class='formbold-btn' onClick={handleOnSubmit}>
              Submit
            </button>
          </form>
        </div>
      </MainLayout>
    </>
  );
}

export default Edit;
