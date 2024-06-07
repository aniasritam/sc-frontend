import React from "react";
import DummyData from "./DummyData";
import { Chart } from "react-google-charts";
import StepCount from "./Stepcount";

const StepCountGraph = () => {
  // Function to format date (display only day and month)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    })}`;
  };

  // Filter data for the past 7 days
  const today = new Date();
  const pastWeekData = DummyData.filter((item) => {
    const itemDate = new Date(item.date);
    const timeDiff = Math.abs(today.getTime() - itemDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays <= 7;
  });

  // Convert data to Google Charts format
  const chartData = pastWeekData.map((item) => [
    formatDate(item.date), // Format date to display only day and month
    item.steps,
  ]);

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

  const totalSteps = DummyData.reduce((acc, item) => acc + item.steps, 0);
  const avgSteps = (totalSteps / DummyData.length).toFixed(0);

  return (
    
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <StepCount avg_steps={avgSteps} total_steps={totalSteps} />
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[["Date", "Steps"], ...chartData]}
        options={chartOptions}
      />
      
    </div>
  );
};

export default StepCountGraph;
