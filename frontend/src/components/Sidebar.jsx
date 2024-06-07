// Sidebar.jsx
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onMenuClick, loginEmail }) => {
  // Function to handle logout and redirection
  const handleSignout = () => {
    // Call the onMenuClick function with "signout" to trigger logout in the parent component
    onMenuClick("signout");
    // Redirect to the sign-in page
    window.location.href = "/signin"; // Redirect to the sign-in page
  };

  return (
    <div className="sidebar">
      <div className="menu-items">
        <p>MontyFit</p>
        <button onClick={() => onMenuClick("update")}>
          <i className="fas fa-sync-alt"></i> Update
        </button>
        <button onClick={() => onMenuClick("profile")}>
          <i className="fas fa-user"></i> Profile
        </button>
        <button onClick={() => onMenuClick("leaderboard")}>
          <i className="fas fa-trophy"></i> Leaderboard
        </button>
        <button onClick={() => onMenuClick("dashboard")}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </button>
      </div>
      {/* Use handleSignout for onClick event of Signout button */}
      <button className="logout" onClick={handleSignout}>
        <i className="fas fa-sign-out-alt"></i> Signout
      </button>
    </div>
  );
};

export default Sidebar;
