import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/Mainarea";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Login from "./components/FazalLogin/Login"



const App = () => {
  const [currentView, setCurrentView] = useState("");

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app">
      <Sidebar onMenuClick={handleMenuClick} />
      <MainArea currentView={currentView} />
    </div>
  );
};

export default App;
