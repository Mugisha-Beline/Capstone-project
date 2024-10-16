import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "JohnDoe",
      content: "What are the best ways to protect endangered species?",
      timestamp: "10 minutes ago",
      image: "/jane.jpg",
    },
    {
      id: 2,
      username: "JaneSmith",
      content: "I think technology can play a significant role!",
      timestamp: "5 minutes ago",
      image: "/jane.jpg",
    },
    {
      id: 3,
      username: "AliceCooper",
      content: "Collaboration is key in conservation efforts!",
      timestamp: "2 minutes ago",
      image: "/jane.jpg",
    },
    {
      id: 4,
      username: "BobMarley",
      content: "We should all take action to protect our planet!",
      timestamp: "1 minute ago",
      image: "/jane.jpg",
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          username: "Guest",
          content: newPost,
          timestamp: "Just now",
          image: "/guest.jpg",
        }
      ]);
      setNewPost('');
    }
  };

  return (
    <div className="forumpage">
    <div className="forum">
      {/* Centered Quote Section */}
      <div className="forum-header">
        <img src="/profile.jpg" alt="Profile" className="header-image"/>
        <blockquote className="quote">“To conserve should be the nature of human being from his childhood up to adulthood.” — John Williams</blockquote>
        <h3 className="header-discuss">Let's Discuss!</h3>
      </div>

      {/* Chat-like posts section */}
      <div className="forum-posts">
        {posts.map((post, index) => (
          <div key={post.id} className={`post ${index % 2 === 0 ? 'post-right' : 'post-left'}`}>
            <div className="post-content">
              <img src={post.image} alt={post.username} className="user-image" />
              <div className="post-bubble">
                <div className="post-info">
                  <strong>{post.username}</strong> <span className="timestamp">{post.timestamp}</span>
                </div>
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post submission form */}
      <div className="post-form">
        <h3>Start a new conversation:</h3>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write your post here..."
            rows="4"
            required
          ></textarea>
          <button type="submit" className="submit-post-button">Post</button>
        </form>
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

export default Forum;
