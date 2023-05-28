import { useState, useEffect } from 'react';
import MainLayout from '../Layout/MainLayout';
import './css/edit.css';

function Edit() {
  const [fnum, setFnum] = useState('');
  const [address, setAddress] = useState('');
  const [git, setGit] = useState('');
  const [link, setLink] = useState('');
  const [mnum, setMnum] = useState('');
  const [image, setImage] = useState('');
  const [Phone, setPhone] = useState('');

  const [editData, setEditData] = useState('');
  
  // useEffect(() => {
  //   fetch('http://localhost:5000/editdata', {
  //     method: 'POST',
  //     crossDomain: true,
  //     headers: {
  //       'content-type': 'application/json',
  //       Accept: 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem('token'),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, 'UserData');
  //       setEditData(data.data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://localhost:5000/getedit', {
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
        console.log(data, 'EditData');
        setFnum(data.data.fnum);
        setAddress(data.data.address);
        setGit(data.data.git);
        setLink(data.data.link);
        setMnum(data.data.mnum);
        setImage(data.data.image);
        setPhone(data.data.Phone);
        setEditData(data.data);
      });
  }, []);


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    var email = editData.email
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          fnum,
          address,
          git,
          link,
          mnum,
          image,
          Phone,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Data saved successfully');
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <MainLayout>
       
          <form onSubmit={handleOnSubmit} style={{marginTop:'45px'}}>
            <div className='formbold-input-flex'>
              <div>
                <input
                  type='text'
                  placeholder='Jane'
                  className='formbold-form-input'
                  value={fnum}
                  onChange={(e) => setFnum(e.target.value)}
                />
                <label className='formbold-form-label'>Father's Contact</label>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Cooper'
                  className='formbold-form-input'
                  value={git}
                  onChange={(e) => setGit(e.target.value)}
                />
                <label className='formbold-form-label'>GitHub</label>
              </div>
            </div>

            <div className='formbold-input-flex'>
              <div>
                <input
                  type='text'
                  placeholder='jhon@mail.com'
                  className='formbold-form-input'
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <label className='formbold-form-label'>LinkedIn</label>
              </div>

              <div>
                <input
                  type='text'
                  placeholder='jhon@mail.com'
                  className='formbold-form-input'
                  value={mnum}
                  onChange={(e) => setMnum(e.target.value)}
                />
                <label className='formbold-form-label'>Mother's Contact</label>
              </div>
            </div>

            <div className='formbold-input-flex'>
              <div>
                <input
                  type='text'
                  placeholder='jhon@mail.com'
                  className='formbold-form-input'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label className='formbold-form-label'>Image</label>
              </div>

              <div>
                <input
                  type='text'
                  placeholder='jhon@mail.com'
                  className='formbold-form-input'
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className='formbold-form-label'>Mobile no.</label>
              </div>
            </div>

            <div className='formbold-textarea'>
              <textarea
                rows='6'
                placeholder='enter your address'
                className='formbold-form-input'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <label className='formbold-form-label'>Address</label>
            </div>

            <button className='formbold-btn' type='submit'>
              Submit
            </button>
          </form>
    
      </MainLayout>
    </>
  );
}

export default Edit;
