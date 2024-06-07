export default function StepCount({ avg_steps, total_steps }) {
  return (
    <div className="step-count-container">
      <div className="step-count-wrapper">
        <button className="btn-39">
          <span className="new">{avg_steps}</span>
          <span className="old">Avg. Steps</span>
        </button>
        <button className="btn-39">
          <span className="new">{total_steps}</span>
          <span className="old">Total Steps</span>
        </button>
      </div>
    </div>
  );
}