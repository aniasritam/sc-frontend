import React from "react";
import "./UpdateStepCount.css";
import { LuAlarmClock } from "react-icons/lu";
import { useState } from "react";
import axios from "axios";

export default function UpdateStepCount({ userEmail }) {
  const [stepCount, setStepCount] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/updateStepCount",
        {
          userEmail,
          stepCount,
          date,
        }
      );
      if (response.data) {
        alert("Steps Updated Successfully");
      }
    } catch (error) {
      console.error("There was an error updating the step count!", error);
    }
  };
  return (
    <div className="container">
      <div>
        <div className="step">
          <h2>
            <LuAlarmClock className="icon" />
          </h2>
          <h2 className="h2container">Update your Step Count</h2>
        </div>
        <div className="dateset">
          <div className=" countbutton">
            <input
              className="but"
              type="number"
              id="stepCount"
              placeholder="Enter the Counts"
              required
              onChange={(e) => setStepCount(e.target.value)}
            />
          </div>

          <input
            className="date"
            type="date"
            id="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="submit">
          <input className="button" type="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
