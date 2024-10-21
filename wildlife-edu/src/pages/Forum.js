import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './Forum.css';
import { auth } from './Firebase'; // Import Firebase authentication

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "JohnDoe",
      content: "What are the best ways to protect endangered species?",
      timestamp: "10 minutes ago",
      likes: 0,
      dislikes: 0,
      replies: [],
      showReply: false, // Track if the reply textarea should be shown
    },
    {
      id: 2,
      username: "JaneSmith",
      content: "I think technology can play a significant role!",
      timestamp: "5 minutes ago",
      likes: 0,
      dislikes: 0,
      replies: [],
      showReply: false,
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [user, setUser] = useState(null); // Store the logged-in user's data

  // Fetch the current user from Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Set user data (could use email, displayName or a custom user profile field)
        setUser({
          displayName: currentUser.displayName || currentUser.email, // Use displayName or email
          email: currentUser.email
        });
      } else {
        setUser(null); // No user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  // Handle posting new content
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() && user) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          username: user.displayName || 'Anonymous', // Use logged-in user's name
          content: newPost,
          timestamp: "Just now",
          likes: 0,
          dislikes: 0,
          replies: [],
          showReply: false,
        }
      ]);
      setNewPost('');
    }
  };

  const toggleReply = (index) => {
    setPosts(posts.map((post, i) => 
      i === index ? { ...post, showReply: !post.showReply } : post
    ));
  };

  const handleReplySubmit = (postId, e) => {
    e.preventDefault();
    if (replyContent.trim() && user) {
      setPosts(posts.map(post => 
        post.id === postId ? {
          ...post,
          replies: [...post.replies, { username: user.displayName || 'Anonymous', content: replyContent, timestamp: "Just now" }],
          showReply: false // Hide reply textarea after submitting
        } : post
      ));
      setReplyContent(''); // Clear reply content
    }
  };

  const handleLike = (index) => {
    setPosts(posts.map((post, i) => 
      i === index ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDislike = (index) => {
    setPosts(posts.map((post, i) => 
      i === index ? { ...post, dislikes: post.dislikes + 1 } : post
    ));
  };

  return (
    <div className="forumpage">
      <div className="forum">
        <div className="forum-header">
          <img src="/profile.jpg" alt="Profile" className="header-image"/>
          <blockquote className="quote">“To conserve should be the nature of human being from his childhood up to adulthood.” — John Williams</blockquote>
          <h3 className="header-discuss">Let's Discuss!</h3>
        </div>

        <div className="forum-posts">
          {posts.map((post, index) => (
            <div key={post.id} className={`post ${index % 2 === 0 ? 'post-right' : 'post-left'}`}>
              <div className="post-content">
                <div className="post-bubble">
                  <div className="post-info">
                    <strong>{post.username}</strong> <span className="timestamp">{post.timestamp}</span>
                  </div>
                  <p>{post.content}</p>
                  {/* Like and Dislike Buttons */}
                  <div className="like-dislike">
                    <button onClick={() => handleLike(index)}>👍 {post.likes}</button>
                    <button onClick={() => handleDislike(index)}>👎 {post.dislikes}</button>
                    {/* Reply Button */}
                    <button onClick={() => toggleReply(index)}>Reply</button>
                  </div>
                  {/* Reply Textarea */}
                  {post.showReply && (
                    <form onSubmit={(e) => handleReplySubmit(post.id, e)}>
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write your reply here..."
                        rows="3"
                        required
                      ></textarea>
                      <button type="submit" className="submit-reply-button">Reply</button>
                    </form>
                  )}
                  {/* Display Replies */}
                  {post.replies.length > 0 && (
                    <div className="replies">
                      {post.replies.map((reply, i) => (
                        <div key={i} className="reply">
                          <strong>{reply.username}</strong>: {reply.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

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
