export default function StepCount({ avgSteps, totalSteps }) {
  return (
    <div className="step-count-container">
      <div className="step-count-wrapper">
        <button className="btn-39">
          <span className="new">{avgSteps}</span>
          <span className="old">Avg. Steps</span>
        </button>
        <button className="btn-39">
          <span className="new">{totalSteps}</span>
          <span className="old">Total Steps</span>
        </button>
      </div>
    </div>
  );
}
