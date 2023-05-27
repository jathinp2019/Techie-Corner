import { useState, useEffect } from 'react';
import MainLayout from '../Layout/MainLayout';
import './css/edit.css';

function Edit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user');
        const userData = await response.json();

        setName(userData.name);
        setEmail(userData.email);
        setAddress(userData.address);
        setDob(userData.dob);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ name, email, address, dob }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.warn(result);
      if (result) {
        alert('Data saved successfully');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <MainLayout>
        <div className='formbold-form-wrapper'>
          <form onSubmit={handleOnSubmit}>
            <div className='formbold-input-flex'>
              <div>
                <input
                  type='text'
                  placeholder='Jane'
                  className='formbold-form-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className='formbold-form-label'> Name </label>
              </div>
              <div>
                <input
                  type='date'
                  placeholder='Cooper'
                  className='formbold-form-input'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <label className='formbold-form-label'> Dob </label>
              </div>
            </div>

            <div className='formbold-input-flex'>
              <div>
                <input
                  type='email'
                  placeholder='jhon@mail.com'
                  className='formbold-form-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className='formbold-form-label'> Mail </label>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='(319) 555-0115'
                  className='formbold-form-input'
                />
                <label className='formbold-form-label'> Phone </label>
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
              <label className='formbold-form-label'> Address </label>
            </div>

            <button className='formbold-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </MainLayout>
    </>
  );
}

export default Edit;
