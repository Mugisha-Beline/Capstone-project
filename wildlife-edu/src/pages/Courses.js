// src/pages/Courses.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './Courses.css';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const courses = {
    finished: [
      {
        id: 1,
        title: "Wildlife Conservation 101",
        description: "Learn the fundamentals of wildlife conservation.",
        image: "/course1.jpg",
      },
      {
        id: 2,
        title: "Forest Ecosystems",
        description: "Explore the complexities of forest ecosystems.",
        image: "/course2.jpg",
      },
    ],
    ongoing: [
      {
        id: 3,
        title: "Endangered Species Protection",
        description: "Discover strategies to protect endangered species.",
        image: "/course2.jpg",
      },
      {
        id: 4,
        title: "Sustainable Practices in Conservation",
        description: "Explore sustainable practices for wildlife conservation.",
        image: "/course3.jpg",
      },
      {
        id: 5,
        title: "Climate Change Impact",
        description: "Understand the effects of climate change on wildlife.",
        image: "/course6.jpg",
      },
    ],
    unstarted: [
      {
        id: 6,
        title: "Marine Life Conservation",
        description: "Understand the challenges facing marine ecosystems.",
        image: "/course4.jpg",
      },
      {
        id: 7,
        title: "Conservation Biology",
        description: "An in-depth look at conservation biology principles.",
        image: "/course7.jpg",
      },
      {
        id: 8,
        title: "Biodiversity and Conservation",
        description: "Study the importance of biodiversity in ecosystems.",
        image: "/course8.jpg",
      },
    ],
  };

  const allCourses = [...courses.finished, ...courses.ongoing, ...courses.unstarted];

  return (
    <div className="coursespages">
    <div className="courses-page">
      <aside className="sidebar">
        <ul><h2>WildlifEDU courses</h2>
        <img src="/profile.jpg" alt="profile" className="profile-image" />
        <h2>Dashboard</h2>
        </ul>
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
        <ul><Link to="/settings" className="cta-button">Settings</Link>
          </ul>
      </aside>

      <main className="courses-content">
        <header className="courses-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Courses</h1>
          <Link to="/add-course" className="add-course-button">Add New Course</Link>
        </header>
        
        <div className="courses-grid">
          {(activeTab === 'all' ? allCourses : courses[activeTab]).map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/Courses/${course.id}`} className="view-course-button">View Course</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
    {/* Footer Section */}
    <footer className="footer">
        <div className="footer-logo">
          <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" className="footer-logo-image" />
        </div>
        <div className="footer-links">
          <Link to="/Donate">Do you want to support us?</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms of Service</Link>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>
      </div>
  );
};

export default Courses;
