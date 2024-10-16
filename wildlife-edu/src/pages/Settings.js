// src/pages/Settings.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Settings.css'; // Import the CSS for styling

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account'); // Set default tab to 'account'
  const [profilePicture, setProfilePicture] = useState('/profile.jpg'); // Default profile picture
  const [name, setName] = useState('John Doe'); // Default name
  const [emailNotifications, setEmailNotifications] = useState(true); // Default notification preference

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Update the profile picture with the uploaded image
    }
  };

  return (
    <div className="settingspage">
    <div className="settings-page">
      <aside className="sidebar">
        <ul>
          <h2>WildlifEDU courses</h2>
          <img src={profilePicture} alt="profile" className="profile-image" />
          <h2>Dashboard</h2>
        </ul>
        <ul>
          <li onClick={() => setActiveTab('account')} className={activeTab === 'account' ? 'active' : ''}>
            Account Settings
          </li>
          <li onClick={() => setActiveTab('payment')} className={activeTab === 'payment' ? 'active' : ''}>
            Payment Method
          </li>
          <li onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>
            Notifications
          </li>
        </ul>
        <ul>
          <Link to="/courses" className="cta-button">Courses</Link>
        </ul>
      </aside>

      <main className="settings-content">
        {activeTab === 'account' && (
          <div className="account-settings">
            <h1>Account Settings</h1>
            <div className="setting-item">
              <label htmlFor="profilePicture">Profile Picture</label>
              <input type="file" id="profilePicture" accept="image/*" onChange={handleProfilePictureChange} />
              <img src={profilePicture} alt="profile" className="profile-image-preview" />
            </div>
            <div className="setting-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="payment-settings">
            <h1>Payment Method</h1>
            <div className="setting-item">
              <label htmlFor="paymentMethod">Select Payment Method</label>
              <select id="paymentMethod">
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="notification-settings">
            <h1>Email Notifications</h1>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
                Receive notifications via email
              </label>
            </div>
          </div>
        )}
        
        <div className="settings-actions">
          <button className="save-button">Save Changes</button>
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

export default Settings;
