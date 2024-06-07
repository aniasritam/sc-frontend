import React from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useEffect, useState } from "react";

const StepCountGraph = ({ userEmail }) => {
  const [averageSteps, setAverageSteps] = useState("");
  const [totalSteps, setTotalSteps] = useState("");
  const [responseData, setResponseData] = useState([]);

  // Function to format date (display only day and month)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    })}`;
  };

  // Convert data to Google Charts format
  const chartData = [["Date", "Steps"]];
  responseData
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((day) => {
      chartData.push([day.date, parseInt(day.steps)]);
    });

  const chartOptions = {
    title: "Step Count for the Past 7 Days",
    legend: { position: "none" },
    chartArea: { width: "80%", height: "80%" },
    hAxis: {
      title: "Date",
      textStyle: { color: "#333" },
      titleTextStyle: { color: "#333" },
    },
    vAxis: {
      title: "Steps",
      minValue: 0,
      textStyle: { color: "#333" },
      titleTextStyle: { color: "#333" },
      slantedText: true,
      slantedTextAngle: 45,
    },
    backgroundColor: "#f9f9f9",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/dashboard");
        const userData = response.data.find((user) => user.email === userEmail);
        if (userData && userData.last_7_days) {
          setResponseData(userData.last_7_days);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userEmail]);

  const fetchAvgData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/buttonAverage", {
        userEmail,
      });
      if (response.data) {
        setAverageSteps(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTotalData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/buttonTotal", {
        userEmail,
      });
      if (response.data) {
        setTotalSteps(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <div className="step-count-container">
        <div className="step-count-wrapper">
          <button className="btn-39" onClick={fetchAvgData}>
            <span className="new">{averageSteps}</span>
            <span className="old">Avg. Steps</span>
          </button>
          <button className="btn-39" onClick={fetchTotalData}>
            <span className="new">{totalSteps}</span>
            <span className="old">Total Steps</span>
          </button>
        </div>
      </div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default StepCountGraph;
