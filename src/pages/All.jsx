import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePage.css';

const courses = [
  { name: 'Full Stack Development', path: '/fullstackdevelopment', image: '/images/fullstack.jpg' },
  { name: 'Data Science', path: '/datascience', image: '/images/datascience.jpg' },
  { name: 'Cyber Security', path: '/cybersecurity', image: '/images/cybersecurity.jpg' },
  { name: 'Career', path: '/career', image: '/images/career.jpg' },
];

const All = () => {
  return (
    <div className="course-page">
      <h1>All Courses</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <Link to={course.path} key={index} className="course-link">
            <div className="course-card">
              <img src={course.image} alt={course.name} className="course-image" />
              <h2>{course.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <p>Discover our full range of courses, from web development to data science and more. Browse through all our offerings and find the perfect course for you.</p>
    </div>
  );
};

export default All;



