// src/pages/UserProfile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Sneha Chauhan",
    username: "sneha123",
    email: "sneha@example.com",
    joined: "Jan 2024",
    contact: "+91 9876543210",
    location: "Bangalore, India",
    appointments: 5,
    preferredDoctor: "Dr. Anjali Mehta (Psychiatrist)"
  };

  const handleLogout = () => {
    // In future: logout logic like Firebase signOut()
    console.log("User logged out");
    navigate('/'); // Redirect to home or login
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      
      <div className="profile-card">
        <div className="profile-section">
          <p><strong>👤 Name:</strong> {user.name}</p>
          <p><strong>🔖 Username:</strong> {user.username}</p>
          <p><strong>📧 Email:</strong> {user.email}</p>
          <p><strong>📅 Joined:</strong> {user.joined}</p>
        </div>
        <hr />
        <div className="profile-section">
          <p><strong>📞 Contact:</strong> {user.contact}</p>
          <p><strong>📍 Location:</strong> {user.location}</p>
          <p><strong>📋 Appointments Booked:</strong> {user.appointments}</p>
          <p><strong>🏥 Preferred Doctor:</strong> {user.preferredDoctor}</p>
        </div>

        <div className="logout-section">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; {new Date().getFullYear()} HealSpace. All rights reserved.
      </div>
    </div>
  );
};

export default Profile;
