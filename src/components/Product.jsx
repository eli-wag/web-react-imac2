

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import { fetchRecipeById } from "../api/mealAPI"; 

export default function Product() {
    
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecipeById(id)
            .then(data => {
                setMeal(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération de la recette :", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (!meal) return <p>Recette introuvable.</p>;

    return <ProductCard key={meal.id} meal={meal} />;
}