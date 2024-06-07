// MainArea.jsx
import React from "react";
import Dashboard from "./AlamDashboard/Dashboard";
import Leaderboard from "./BinduDashboard/LeaderBoard";
import Profile from "./SalmanProfile/Profile.jsx";
import UpdateStepCount from "./MukilUpdateStepCount/UpdateStepCount.jsx";
import Signout from "./Signout"; // Import the updated Signout component

const MainArea = ({ currentView, onLogout, loginEmail }) => {
  const renderView = () => {
    switch (currentView) {
      case "update":
        return <UpdateStepCount userEmail={loginEmail} />;
      case "profile":
        return <Profile userEmail={loginEmail} />;
      case "leaderboard":
        return <Leaderboard />;
      case "dashboard":
        return <Dashboard userEmail={loginEmail} />;
      case "signout":
        // Render Signout component directly and pass onLogout function
        return <Signout onLogout={onLogout} />;
      default:
        return (
          <div>
            <Profile userEmail={loginEmail} />
          </div>
        );
    }
  };

  return <div className="main-area">{renderView()}</div>;
};

export default MainArea;
