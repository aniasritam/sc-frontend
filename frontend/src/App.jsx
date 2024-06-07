import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/Mainarea";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Login from "./components/FazalLogin/Login";
import Signout from "../src/components/FazalLogin/Logout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [currentView, setCurrentView] = useState(""); // State to manage current view
  const [loginEmail, setLoginEmail] = useState(""); // State to store login email

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  // Function to handle login
  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setLoginEmail(email); // Set login email
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView(""); // Reset current view on logout
  };

  // Render different content based on login status
  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <Sidebar onMenuClick={handleMenuClick} loginEmail={loginEmail} />
          <MainArea
            currentView={currentView}
            onLogout={handleLogout}
            loginEmail={loginEmail}
          />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
