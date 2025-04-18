import React from "react";
import "../style/Tags.css";
import Slider from "./Slider.jsx";

export default function Tag({ onFilterChange, onHealthScoreChange, filters }) {

  return (
    <div className="tags">
      <div className="diet">
        <select
          name="diet"
          className="selection"
          onChange={onFilterChange}
          value={filters.diet}
        >
          <option value="">Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="glutenFree">Gluten free</option>
          <option value="dairyFree">Dairy free</option>
        </select>
      </div>

      <div className="mealType">
        <select
          name="mealType"
          className="selection"
          onChange={onFilterChange}
          value={filters.mealType}
        >
          <option value="">Type of meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <Slider onHealthScoreChange={onHealthScoreChange} filters={filters} />
    </div>
  );
}