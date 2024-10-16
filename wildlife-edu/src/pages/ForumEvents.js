// src/pages/ForumEvents.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './ForumEvents.css';

const ForumEvents = () => {
  return (
    <div className="forum-eventspage">
    <div className="forum-events-container">
      <div className="forum-header">
        <h2>Forum & Events</h2>
      </div>
      
      {/* Discussion Forum Section */}
      <div className="forum-section">
        <h3>Discussion Forum</h3>
        <p>Join the conversation about wildlife conservation. Share your thoughts, ask questions, and connect with other community members.</p>

        {/* Chat-Like Forum Topics with Icon */}
        <div className="chat-forum">
<div className="forum-cards">
  <div className="forum-card">
    <img src="/chat.png" alt="Chat Icon" className="forum-card-icon" />
    <div className="forum-card-content">
      <h4><a href="/forum">What can we do to protect endangered species?</a></h4>
      <p>Discuss strategies to save endangered species and exchange ideas with others.</p>
    </div>
  </div>

  <div className="forum-card">
    <img src="/chat.png" alt="Chat Icon" className="forum-card-icon" />
    <div className="forum-card-content">
      <h4><a href="/forum">Innovative technologies in wildlife preservation</a></h4>
      <p>Explore the latest tech being used to help preserve wildlife globally.</p>
    </div>
  </div>

  <div className="forum-card">
    <img src="/chat.png" alt="Chat Icon" className="forum-card-icon" />
    <div className="forum-card-content">
      <h4><a href="/forum">Local conservation efforts in our community</a></h4>
      <p>Share and learn about the local efforts in conservation happening near you.</p>
    </div>
  </div>
</div>

        </div>

        {/* Link to Forum Page */}
        <Link to="/forum" className="join-forum-button">Join Forum</Link>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h3>Upcoming Events</h3>
        
        {/* Event Cards with Animations */}
        <div className="event-cards">
          <div className="event-card">
            <img src="/wildlife-workshop.jpg" alt="Wildlife Conservation Workshop" className="event-image" />
            <strong>Wildlife Conservation Workshop</strong>
            <p>Date: October 25, 2024</p>
            <p>Location: Community Center, City Hall</p>
          </div>

          <div className="event-card">
            <img src="/beach-cleanup.jpg" alt="Beach Cleanup Day" className="event-image" />
            <strong>Beach Cleanup Day</strong>
            <p>Date: November 5, 2024</p>
            <p>Location: Local Beach Park</p>
          </div>

          <div className="event-card">
            <img src="/wildlife-photography.jpg" alt="Wildlife Photography Exhibition" className="event-image" />
            <strong>Wildlife Photography Exhibition</strong>
            <p>Date: December 1-15, 2024</p>
            <p>Location: City Art Gallery</p>
          </div>
        </div>

        {/* Link to View All Events Page */}
        <Link to="/all-events" className="view-events-button">View All Events</Link>
      </div>
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

export default ForumEvents;
