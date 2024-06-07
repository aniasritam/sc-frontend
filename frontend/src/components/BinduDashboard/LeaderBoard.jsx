import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./LeaderBoard.css"; // Import the CSS file for styling

export default function Leaderboard() {
  const [view, setView] = useState("daily");
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  const fetchDailyResult = async () => {
    try {
      const dailyResponse = await axios.get(
        "http://localhost:5000/leaderboardDaily"
      );
      setDailyData(dailyResponse.data);
    } catch (error) {
      console.error("Error fetching daily leaderboard data:", error);
    }
  };

  const fetchWeekResult = async () => {
    try {
      const weeklyResponse = await axios.get(
        "http://localhost:5000/leaderboardWeekly"
      );
      setWeeklyData(weeklyResponse.data);
    } catch (error) {
      console.error("Error fetching weekly leaderboard data:", error);
    }
  };

  useEffect(() => {
    if (view === "daily") {
      fetchDailyResult();
    } else if (view === "weekly") {
      fetchWeekResult();
    }
  }, [view]);

  const renderTable = () => {
    if (view === "daily") {
      return (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Steps</th>
            </tr>
          </thead>
          <tbody>
            {dailyData.length > 0 ? (
              dailyData.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.stepcount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    } else if (view === "weekly") {
      return (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Avg Steps</th>
            </tr>
          </thead>
          <tbody>
            {weeklyData.length > 0 ? (
              weeklyData.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.avg_steps}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <div className="button-container">
        <button
          className={`view-button ${view === "daily" && "active"}`}
          onClick={() => setView("daily")}
        >
          Daily
        </button>
        <button
          className={`view-button ${view === "weekly" && "active"}`}
          onClick={() => setView("weekly")}
        >
          This Week
        </button>
      </div>
      {renderTable()}
    </div>
  );
}
