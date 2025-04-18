const API_KEY = "5a20c3cf099c4ae18a16f3cd886d77cc";

export async function fetchRecipes(limit = 50, retries = 5, delay = 1000) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${limit}&addRecipeInformation=true`;

    for (let i = 0; i <= retries; i++) {
        const response = await fetch(url);

        if (response.status !== 429) {
            const result = await response.json();

            if (result.results) {
                const uniqueRecipesMap = new Map();
                result.results.forEach(recipe => {
                    if (!uniqueRecipesMap.has(recipe.id)) {
                        uniqueRecipesMap.set(recipe.id, recipe);
                    }
                });

                return Array.from(uniqueRecipesMap.values());
            }
            return [];
        }

        const waitTime = delay * Math.pow(2, i);
        console.warn(`Erreur 429. Retry in ${waitTime}ms`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    throw new Error("Trop de tentatives.");
}

export async function fetchRecipeById(id) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    return await response.json();
}
