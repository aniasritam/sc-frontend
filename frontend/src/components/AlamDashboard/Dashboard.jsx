import PastWeekData from "./PastWeekData";
import StepCountGraph from "./StepCountGraph";
import StepCount from "./Stepcount";
import './Dashboard.css'

const Dashboard = ({ userEmail }) => {
    return (
      <div className="dashboard-container">
        <StepCountGraph userEmail={userEmail} />
        <div>
          <PastWeekData userEmail={userEmail} /> 
        </div>
      </div>
    );
  };
  export default Dashboard;