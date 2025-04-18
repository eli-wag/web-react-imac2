import Tag from "./Tags.jsx";
import MealCard from "./MealCard.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useFilters } from "../services/useFilters";
import "../App.css"


export default function Home() {

  const {
    filters,
    handleFilterChange,
    handleSearchChange,
    filteredRecipes,
    handleHealthScoreChange
  } = useFilters();

  return (
    <div id="container">
      <Header onSearchChange={handleSearchChange} />
      <Tag onFilterChange={handleFilterChange} onHealthScoreChange={handleHealthScoreChange} filters={filters}/>
      <div id="main">
        <div id="gallery">
          {filteredRecipes.length > 0 ? (
            filteredRecipes/*.slice(0, 10)*/.map((meal) => (
              <MealCard
                key={meal.id}
                id={meal.id}
                title={meal.title}
                pictureUrl={meal.image}
              />
            ))
          ) : (
            <p>No recipes</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
