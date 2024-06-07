import React from 'react';
import DummyData from './DummyData';

const StepsTable = () => {
  // Calculate total steps and average steps
  let totalSteps = 0;
  let averageSteps = 0;
  const dataWithTotalAndAverage = DummyData.map((entry, index) => {
    totalSteps += entry.steps;
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
