// src/components/Courses/Courses.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import { getAllCourses, getUserCourses } from './utils/api';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [courses, setCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  // Sample course data to illustrate the structure
  const sampleCourses = [
    {
      id: 1,
      title: 'Conservation 101',
      description: 'Learn the basics of wildlife conservation.',
      image: '/conservation.jpg',
    },
    {
      id: 2,
      title: 'Innovative Technologies',
      description: 'Explore how technology is helping preserve wildlife.',
      image: '/technology.jpg',
    },
    {
      id: 3,
      title: 'Local Wildlife',
      description: 'Discover the wildlife in your area and how to protect it.',
      image: '/local.jpg',
    },
    {
      id: 4,
      title: 'Sustainable Practices',
      description: 'Understand sustainable practices for wildlife protection.',
      image: '/sustainable.jpg',
    },
    {
      id: 5,
      title: 'Ecological Footprints',
      description: 'Learn about ecological footprints and their impacts.',
      image: '/ecological.jpg',
    },
  ];

  // Fetch all courses and user's progress when the component mounts
  useEffect(() => {
    // Here you might want to use the sample courses if the API call fails
    getAllCourses()
      .then(data => {
        setCourses(data.courses.length ? data.courses : sampleCourses); // Use sample data if no courses found
      })
      .catch(() => {
        setCourses(sampleCourses); // Fallback to sample courses if fetch fails
      });

    getUserCourses().then(data => setUserCourses(data.user_courses));
  }, []);

  // Filter courses based on the active tab (ongoing, finished, unstarted)
  const getFilteredCourses = () => {
    if (activeTab === 'all') return courses;
    if (activeTab === 'ongoing') return userCourses.filter(c => c.progress < 100);
    if (activeTab === 'finished') return userCourses.filter(c => c.progress === 100);
    if (activeTab === 'unstarted') return courses.filter(c => !userCourses.some(uc => uc.course === c.title));
    return [];
  };

  return (
    <div className="courses-page">
      <aside className="sidebar">
        <h2>WildlifEDU Courses</h2>
        <img src="/profile.jpg" alt="profile" className="profile-image" />
        <ul>
          <li onClick={() => setActiveTab('all')} className={activeTab === 'all' ? 'active' : ''}>
            All Courses
          </li>
          <li onClick={() => setActiveTab('ongoing')} className={activeTab === 'ongoing' ? 'active' : ''}>
            Ongoing Courses
          </li>
          <li onClick={() => setActiveTab('finished')} className={activeTab === 'finished' ? 'active' : ''}>
            Finished Courses
          </li>
          <li onClick={() => setActiveTab('unstarted')} className={activeTab === 'unstarted' ? 'active' : ''}>
            Unstarted Courses
          </li>
        </ul>
        <Link to="/settings" className="cta-button">Settings</Link>
      </aside>

      <main className="courses-content">
        <header className="courses-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Courses</h1>
        </header>

        <div className="courses-grid">
          {getFilteredCourses().map(course => (
            <div key={course.id || course.course} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <Link to={`/courses/${course.id}`} className="course-title">
                <h2>{course.title}</h2>
              </Link>
              <p className="course-description">{course.description}</p>
              <Link to={`/courses/${course.id}`} className="view-course-button">View Course</Link>
              {/* Optionally display progress */}
              {userCourses.some(uc => uc.course === course.title) && (
                <p>Progress: {userCourses.find(uc => uc.course === course.title).progress}%</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
