
import "../style/ProductCard.css";

export default function ProductCard({ meal }) {
    
    return (
        <div className="productCard">
            <div className="firstPresentationProduct">
                <img className="productImg"
                    src={meal.image}
                    alt={meal.title}
                />
                <div className="productDescription">
                    <h1 className="productTitle">{meal.title}</h1>
                    <div className="productInformations">
                        <div className="infoElement readyInMinutes">
                            <img className="timeImg" src="../img/time.png" alt="time icon" />
                            <p>{meal.readyInMinutes} minutes</p>
                        </div>
                        <div className="infoElement servings">
                            <img className="miamImg" src="../img/miam.png" alt="miam icon" />
                            <p>{meal.servings} servings</p>
                        </div>
                    </div>
                    <div id="extendedIngredients">
                        <h3>Ingredients:</h3>
                        {meal.extendedIngredients ? meal.extendedIngredients.map((element, index) => (
                            <li key={index}>{element.name}</li>
                        )) : <p>No ingredients available</p>}
                    </div>
                </div>
            </div>
            <div className="instructions">
                <h3><b>Instructions:</b></h3>
                {meal.analyzedInstructions && meal.analyzedInstructions.length > 0
                    ? meal.analyzedInstructions[0].steps.map((step) => (
                        <p key={step.number}><b>{step.number} - </b>{step.step}</p>
                    ))
                    : <p>No instructions available</p>}
            </div>
        </div>
    );
}
