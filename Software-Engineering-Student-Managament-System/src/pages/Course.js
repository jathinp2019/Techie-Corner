import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/css/course.css';
import MainLayout from '../Layout/MainLayout';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course_ids')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error fetching course IDs:', error);
      });
  }, []);

  return (
    <MainLayout>
    <div className='courses'>
      <h2>Available Courses</h2>
      <div  className="button-container">
        {courses.map((courseId) => (
            <Link key={courseId} to={`/quiz?course_id=${courseId}`}>
            <button>{courseId}</button>
            </Link>
        ))}
      </div>
    </div>
    </MainLayout>
  );
}

export default CourseList;