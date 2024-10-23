// src/pages/Settings.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth'; // Import Firebase methods
import { auth } from './Firebase'; // Import Firebase auth instance
import './Home.css';
import './Settings.css'; // Import the CSS for styling

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account'); // Set default tab to 'account'
  const [profilePicture, setProfilePicture] = useState('/profile.jpg'); // Default profile picture
  const [name, setName] = useState('John Doe'); // Default name
  const [emailNotifications, setEmailNotifications] = useState(true); // Default notification preference
  const [oldPassword, setOldPassword] = useState(''); // Old password
  const [newPassword, setNewPassword] = useState(''); // New password
  const [confirmNewPassword, setConfirmNewPassword] = useState(''); // Confirm new password

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Update the profile picture with the uploaded image
    }
  };

  const handleSaveChanges = () => {
    // Save changes to Firebase (this should include name, profile picture, and notification preferences)
    alert('Changes saved successfully!');
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }

    try {
      // Re-authenticate the user with the old password before allowing password change
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential); // Re-authenticate the user

      // Update the password
      await updatePassword(user, newPassword);
      alert('Password changed successfully!');
    } catch (error) {
      alert(error.message); // Handle errors (e.g., wrong old password, network issues)
    }
  };

  return (
    <div className="settingspage">
      <div className="settings-page">
        {/* Sidebar Menu or Top Menu based on screen size */}
        <aside className="sidebar">
          <ul className="profile-info">
            <div className="profile-image-container">
              <img src={profilePicture} alt="profile" className="profile-image" />
            </div>
          </ul>
          <ul className="menu-options">
            <li onClick={() => setActiveTab('account')} className={activeTab === 'account' ? 'active' : ''}>
              Account Settings
            </li>
            <li onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>
              Notifications
            </li>
            <li onClick={() => setActiveTab('password')} className={activeTab === 'password' ? 'active' : ''}>
              Change Password
            </li>
          </ul>  
          <Link to="/courses" className="cta-button">Courses</Link>
        </aside>

        {/* Main content */}
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

          {activeTab === 'password' && (
            <div className="password-settings">
              <h1>Change Password</h1>
              <form onSubmit={handlePasswordChange}>
                <div className="setting-item">
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Enter old password"
                    required
                  />
                </div>
                <div className="setting-item">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <div className="setting-item">
                  <label htmlFor="confirmNewPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </form>
            </div>
          )}

          <div className="settings-actions">
            <button className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
