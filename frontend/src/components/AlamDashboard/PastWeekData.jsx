import React, { useState, useEffect } from "react";
import axios from "axios";

const StepsTable = ({ userEmail }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/dashboard");
        const userData = response.data.find((user) => user.email === userEmail);
        userData.last_7_days.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setUserData(userData.last_7_days);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userEmail]);

  // Calculate total steps and average steps
  let totalSteps = 0;
  let averageSteps = 0;
  const dataWithTotalAndAverage = userData.map((entry, index) => {
    totalSteps += +entry.steps;
    averageSteps = totalSteps / (index + 1);
    return { ...entry, totalSteps, averageSteps };
  });

  return (
    <div className="steps-table">
      <table>
        <thead>
          <tr>
            <th></th>
            {dataWithTotalAndAverage.map((entry, index) => (
              <th key={index}>{entry.date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Steps</th>
            {dataWithTotalAndAverage.map((entry, index) => (
              <td key={index}>{entry.steps}</td>
            ))}
          </tr>
          <tr>
            <th>Total Steps</th>
            {dataWithTotalAndAverage.map((entry, index) => (
              <td key={index}>{entry.totalSteps}</td>
            ))}
          </tr>
          <tr>
            <th>Average Steps</th>
            {dataWithTotalAndAverage.map((entry, index) => (
              <td key={index}>{Math.round(entry.averageSteps)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StepsTable;
