import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ import from firebase.js
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Logout failed: " + error.message);
      });
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to HealSpace 🌿</h1>
      <p>Your mental wellness companion</p>

      <div className="card-container">
        <div className="card">🧘 Meditation</div>
        <div className="card">⚠️ Precautions</div>
        <div className="card">👩‍⚕️ Consult</div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
