import React from "react";
import { Link } from "react-router-dom";
import "../style/MealCard.css";

// Modifié pour recevoir les props directement
export default function MealCard({ id, title, pictureUrl }) {
    
  return (
    <div className="mealCard" key={id}>
      <img className="mealImg" src={pictureUrl} alt={title} />
      <div className="mealDescription">
        <p className="mealTitle">{title}</p>
        <Link to={"/products/" + id}>Recipe</Link>
      </div>
    </div>
  );
}
