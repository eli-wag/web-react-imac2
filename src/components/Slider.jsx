import "../style/Slider.css";

export default function Slider({ onHealthScoreChange, filters }) {
  return (
    <div className="slideContainer">
      <label className="labelHealth">Health Score</label>
      <input
        type="range"
        min="50"
        max="100"
        className="slider"
        id="healthScore"
        value={filters?.healthScore ?? 100}
        onChange={(e) => {
          onHealthScoreChange(e); 
        }}
      />
    </div>
  );
}