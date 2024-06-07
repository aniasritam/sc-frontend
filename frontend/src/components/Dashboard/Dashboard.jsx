import PastWeekData from "./PastWeekData";
import StepCountGraph from "./StepCountGraph";
import StepCount from "./Stepcount";
import './Dashboard.css'

export default function Dashboard() {
    return (
      <div className="dashboard-container">
        <StepCountGraph />
        <div>
          <PastWeekData /> 
        </div>
      </div>
    );
  }