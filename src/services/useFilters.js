import { useState, useEffect } from "react";
import { fetchRecipes } from "../api/mealAPI.js";

export function useFilters() {
  const [filters, setFilters] = useState({
    diet: "",
    healthScore: 50,
    mealType: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const fetchedRecipes = await fetchRecipes();
        setRecipes(fetchedRecipes);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);


  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, []);

  const saveFiltersToLocalStorage = (newFilters) => {
    localStorage.setItem("filters", JSON.stringify(newFilters));
  };

  const saveHealthScoreToLocalStorage = (value) => {
    localStorage.setItem("healthScore", value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: value,
      };
      saveFiltersToLocalStorage(updatedFilters); 
      return updatedFilters;
    });
  };

  const handleHealthScoreChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters((prev) => {
      const updated = { ...prev, healthScore: value };
      saveFiltersToLocalStorage(updated); 
      return updated;
    });
  }
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter((meal) => {
    const { diet, healthScore, mealType } = filters;
  
    const matchesDiet = diet ? meal[diet] : true;
  
    const matchesHealthScore = meal.healthScore <= healthScore;
  
    const matchesMealType = mealType
      ? Array.isArray(meal.dishTypes) && meal.dishTypes.includes(mealType)
      : true;
  
    const matchesSearch = searchQuery
      ? meal.title.toLowerCase().includes(searchQuery)
      : true;
  
    return matchesDiet && matchesHealthScore && matchesMealType && matchesSearch;
  });
  

  return {
    filters,
    searchQuery,
    handleFilterChange,
    handleSearchChange,
    handleHealthScoreChange,
    filteredRecipes,
    loading,
    error,
  };
}
