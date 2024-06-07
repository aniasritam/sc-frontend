import React, { useState } from "react";
import "./LeaderBoard.css"; 
 
const dailyData = [
  { slNo: 1, name: "John", day: 743 },
  { slNo: 2, name: "Alice", day: 845 },
  { slNo: 3, name: "Bob", day: 776 },
  // Add more data for each day
];
 
const weeklyData = [
  { slNo: 1, name: "John", avgSteps: 5000 },
  { slNo: 2, name: "Alice", avgSteps: 6000 },
  { slNo: 3, name: "Bob", avgSteps: 4500 },
  // Add more data for each week
];
 
export default function Leaderboard() {
  const [view, setView] = useState("daily");
 
  const renderTable = () => {
    if (view === "daily") {
      return (
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {dailyData.map((record) => (
              <tr key={record.slNo}>
                <td>{record.slNo}</td>
                <td>{record.name}</td>
                <td>{record.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (view === "weekly") {
      return (
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Avg Steps</th>
            </tr>
          </thead>
          <tbody>
            {weeklyData.map((record) => (
              <tr key={record.slNo}>
                <td>{record.slNo}</td>
                <td>{record.name}</td>
                <td>{record.avgSteps}</td>
              </tr>
            ))}
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
          Weekly
        </button>
      </div>
      {renderTable()}
    </div>
  );
}